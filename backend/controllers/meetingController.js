const Meeting = require('../models/Meeting');

// Update meeting details
exports.updateMeetingDetails = async (req, res) => {
    const { meetingId } = req.params;
    const { details, documentation } = req.body;

    try {
        const meeting = await Meeting.findById(meetingId);

        if (!meeting) {
            return res.status(404).json({ message: 'Meeting not found' });
        }

        // Update meeting details
        meeting.details = details;
        meeting.documentation = documentation;
        meeting.status = 'Dibuat';

        await meeting.save();

        res.status(200).json({ message: 'Meeting updated successfully', meeting });
    } catch (err) {
        res.status(500).json({ message: 'Error updating meeting', error: err });
    }
};
