const express = require('express');
const router = express.Router();
const { getCourses, createCourse, addMeeting, updateMeeting, markCourseComplete, getValidatedCourses, getCourseDetails } = require('../controllers/courseController');
const authMiddleware = require('../middleware/authMiddleware');

// Lindungi endpoint dengan middleware
router.get('/', getCourses); // Tidak perlu autentikasi
router.post('/', authMiddleware, createCourse); // Perlu autentikasi
router.post('/:id/meetings', authMiddleware, addMeeting);
router.put('/meetings/:meetingId', authMiddleware, updateMeeting);
router.put('/:id/complete', authMiddleware, markCourseComplete);

router.get('/validated', authMiddleware, getValidatedCourses);
router.get('/:courseId', authMiddleware, getCourseDetails);

module.exports = router;
