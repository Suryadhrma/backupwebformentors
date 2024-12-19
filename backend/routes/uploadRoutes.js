const express = require('express');
const { uploadFiles, saveFiles } = require('../controllers/uploadController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Upload file dan menyimpan data tambahan
router.post('/upload', authMiddleware, uploadFiles, saveFiles);

module.exports = router;
