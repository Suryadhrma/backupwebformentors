const express = require('express');
const { getPendingMentors, getMentorDetails, updateMentorStatus } = require('../controllers/adminController');

const router = express.Router();

router.get('/pending-mentors', getPendingMentors);
router.get('/mentor/:mentorId', getMentorDetails);
router.put('/mentor/:mentorId/status', updateMentorStatus);

module.exports = router;
