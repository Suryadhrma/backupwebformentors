const Course = require('../models/Course');
const Meeting = require('../models/Meeting');
const { createValidationRequest } = require('./courseValidationController');

// Get all courses
exports.getCourses = async (req, res) => {
    try {
        const courses = await Course.find().populate('meetings');
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching courses', error: err });
    }
};

exports.createCourse = async (req, res) => {
    console.log(req.user); // Debugging: cek isi req.user
    const { title, description, photo, videoHighlight, price } = req.body;
    const mentorId = req.user?.id; // Gunakan optional chaining

    if (!mentorId) {
        return res.status(401).json({ message: 'Unauthorized: Mentor ID not found in request' });
    }

    try {
        const newCourse = new Course({ title, description, photo, videoHighlight, price });
        await newCourse.save();

        // Create validation request
        await createValidationRequest(mentorId, newCourse._id);

        res.status(201).json(newCourse);
    } catch (err) {
        res.status(500).json({ message: 'Error creating course', error: err });
    }
};


// Add a meeting to a course
exports.addMeeting = async (req, res) => {
    const { id } = req.params;
    const { title, } = req.body;

    try {
        const course = await Course.findById(id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        const newMeeting = new Meeting({ title, course: id });
        await newMeeting.save();

        course.meetings.push(newMeeting._id);
        await course.save();

        res.status(201).json(newMeeting);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error adding meeting', error: err });
    }
};

// Update a meeting's syllabus
exports.updateMeeting = async (req, res) => {
    const { meetingId } = req.params;
    const { title, materials, taskText, taskFile } = req.body;

    try {
        const meeting = await Meeting.findById(meetingId);
        if (!meeting) {
            return res.status(404).json({ message: 'Meeting not found' });
        }

        // Update meeting fields
        if (title) meeting.title = title;
        if (materials) meeting.materials = materials;
        if (taskText) meeting.taskText = taskText;
        if (taskFile) meeting.taskFile = taskFile;

        await meeting.save();
        res.status(200).json(meeting);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error updating meeting', error: err });
    }
};

// Mark course as completed
exports.markCourseComplete = async (req, res) => {
    const { id } = req.params;

    try {
        const course = await Course.findById(id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        course.status = 'completed'; // Set status to completed
        await course.save();

        // Notify admin logic here (e.g., save to admin queue, send email, etc.)
        res.status(200).json({ message: 'Course marked as completed and sent to admin', course });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error marking course as completed', error: err });
    }
};

// Get validated courses for mentor dashboard
exports.getValidatedCourses = async (req, res) => {
    const mentorId = req.user.id;

    try {
        const courses = await Course.find({ mentor: mentorId, status: { $in: ['Berlangsung', 'Selesai'] } })
            .populate('meetings', 'title status')
            .select('title photo participants rating status');

        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching courses', error: err });
    }
};

// Get course details including meetings
exports.getCourseDetails = async (req, res) => {
    const { courseId } = req.params;

    try {
        const course = await Course.findById(courseId)
            .populate('meetings', 'title status');

        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        res.status(200).json(course);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching course details', error: err });
    }
};
