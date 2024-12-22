const Mentor = require('../models/Mentor');

// Get All Pending Mentor Requests
exports.getPendingMentors = async (req, res) => {
    try {
        const pendingMentors = await Mentor.find({ status: 'Menunggu Konfirmasi' }, 'fullName status');
        res.status(200).json(pendingMentors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get Mentor Details
exports.getMentorDetails = async (req, res) => {
    try {
        const { mentorId } = req.params;
        const mentor = await Mentor.findById(mentorId, '-password');
        if (!mentor) return res.status(404).json({ message: 'Mentor not found' });

        res.status(200).json(mentor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update Mentor Status
exports.updateMentorStatus = async (req, res) => {
    try {
        const { mentorId } = req.params;
        const { status } = req.body;

        if (!['Diterima', 'Ditolak'].includes(status)) {
            return res.status(400).json({ message: 'Invalid status' });
        }

        const mentor = await Mentor.findByIdAndUpdate(
            mentorId,
            { status },
            { new: true }
        );

        if (!mentor) return res.status(404).json({ message: 'Mentor not found' });

        res.status(200).json({ message: 'Mentor status updated successfully', mentor });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
