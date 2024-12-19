const express = require('express');
const { forgotPassword } = require('../controllers/passwordController');

const router = express.Router();

// Route untuk lupa password
router.post('/forgot-password', forgotPassword);

module.exports = router;
