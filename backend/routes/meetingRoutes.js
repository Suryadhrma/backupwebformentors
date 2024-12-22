const express = require('express');
const { updateMeetingDetails } = require('../controllers/meetingController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.put('/:meetingId', authMiddleware, updateMeetingDetails);

module.exports = router;
