const CourseValidation = require('../models/CourseValidation');
const Mentor = require('../models/Mentor');
const Course = require('../models/Course');

// Get all validation requests
exports.getValidationRequests = async (req, res) => {
    try {
        const requests = await CourseValidation.find()
            .populate('mentor', 'fullName email photoFile')
            .populate('course', 'title status');
        res.status(200).json(requests);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching validation requests', error: err });
    }
};

// Get validation request details
exports.getValidationRequestDetails = async (req, res) => {
    const { id } = req.params;
    try {
        const request = await CourseValidation.findById(id)
            .populate('mentor', 'fullName email photoFile roles')
            .populate('course', 'title description price videoHighlight status');
        if (!request) {
            return res.status(404).json({ message: 'Validation request not found' });
        }
        res.status(200).json(request);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching validation request details', error: err });
    }
};

// Approve or reject validation request
exports.updateValidationRequestStatus = async (req, res) => {
    const { id } = req.params;
    const { status, rejectionReason } = req.body;

    try {
        const request = await CourseValidation.findById(id).populate('course');
        if (!request) {
            return res.status(404).json({ message: 'Validation request not found' });
        }

        request.status = status;
        if (status === 'Ditolak' && rejectionReason) {
            request.rejectionReason = rejectionReason;
        } else if (status === 'Diterima') {
            request.course.status = 'active';
            await request.course.save();
        }
        await request.save();
        res.status(200).json(request);
    } catch (err) {
        res.status(500).json({ message: 'Error updating validation request status', error: err });
    }
};

// Create validation request (Triggered when mentor creates a course)
exports.createValidationRequest = async (mentorId, courseId) => {
    const newRequest = new CourseValidation({ mentor: mentorId, course: courseId });
    await newRequest.save();
    return newRequest;
};
