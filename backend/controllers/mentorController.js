// controllers/mentorController.js
const Course = require('../models/Course');
const Meeting = require('../models/Meeting');

// Mendapatkan semua course yang sudah diambil student
exports.getCoursesTakenByStudents = async (req, res) => {
    try {
        // Cari course dengan data jumlah peserta dan progress penyelesaian
        const courses = await Course.find({ participants: { $gt: 0 } }) // Hanya course dengan peserta > 0
            .populate('meetings', 'status') // Ambil data meetings
            .lean();

        const coursesWithDetails = courses.map(course => {
            const completedMeetings = course.meetings.filter(m => m.status === 'completed').length;
            const totalMeetings = course.meetings.length;
            const progress = totalMeetings > 0 ? (completedMeetings / totalMeetings) * 100 : 0;
            return {
                id: course._id,
                title: course.title,
                participants: course.participants,
                progress: Math.round(progress),
            };
        });

        res.status(200).json(coursesWithDetails);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Gagal mengambil data course yang diambil oleh student', error: err });
    }
};

// Mendapatkan semua meeting untuk course tertentu
exports.getMeetingsForSelectedCourse = async (req, res) => {
    const { courseId } = req.params;
    try {
        const meetings = await Meeting.find({ course: courseId }, 'title status'); // Ambil title dan status
        res.status(200).json(meetings);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Gagal mengambil data meeting untuk course ini', error: err });
    }
};

// Menambahkan rincian kegiatan ke meeting
exports.addActivityToMeeting = async (req, res) => {
    const { meetingId } = req.params;
    const { activityDetails, documentationText } = req.body;
    const documentationFile = req.file ? req.file.path : null;

    try {
        const meeting = await Meeting.findById(meetingId);
        if (!meeting) {
            return res.status(404).json({ message: 'Meeting tidak ditemukan' });
        }

        // Tambahkan rincian kegiatan
        if (activityDetails) meeting.activityDetails = activityDetails;
        if (documentationText) meeting.documentationText = documentationText;
        if (documentationFile) meeting.documentationFile = documentationFile;

        await meeting.save();
        res.status(200).json(meeting);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Gagal menambahkan rincian kegiatan', error: err });
    }
};

