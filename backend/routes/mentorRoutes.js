// routes/mentorRoutes.js
const express = require('express');
const router = express.Router();


const { 
    getCoursesTakenByStudents, 
    getMeetingsForSelectedCourse, 
    addActivityToMeeting 
} = require('../controllers/mentorController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Konfigurasi multer untuk upload file

// Mendapatkan semua course yang sudah diambil student
router.get('/dashboard/courses', getCoursesTakenByStudents);

// Mendapatkan semua meeting untuk course tertentu
router.get('/dashboard/courses/:courseId/meetings', getMeetingsForSelectedCourse);

// Menambahkan rincian kegiatan ke meeting
router.post('/dashboard/meetings/:meetingId/activity', upload.single('documentationFile'), addActivityToMeeting);

module.exports = router;
