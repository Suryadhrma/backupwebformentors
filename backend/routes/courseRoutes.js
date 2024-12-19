const express = require('express');
const router = express.Router();
const { getCourses, createCourse, addMeeting, updateMeeting, markCourseComplete } = require('../controllers/courseController');

// Routes
router.get('/', getCourses); // Get all courses
router.post('/', createCourse); // Create a new course
router.post('/:id/meetings', addMeeting); // Add a meeting to a course
// Update meeting syllabus
router.put('/meetings/:meetingId', updateMeeting);

router.put('/:id/complete', markCourseComplete);

module.exports = router;
