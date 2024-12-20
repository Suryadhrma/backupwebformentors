const express = require('express');
const { registerMentor, loginMentor, completeRegistration} = require('../controllers/authController');
const { forgotPassword } = require('../controllers/passwordController');
const upload = require('../middleware/upload');


const router = express.Router();

router.post('/register', registerMentor);
router.post('/login', loginMentor);
router.post('/forgot-password', forgotPassword);

// Complete Mentor Registration
router.put(
    '/register2/:mentorId',
    upload.fields([
        { name: 'cvFile', maxCount: 1 },
        { name: 'ktpFile', maxCount: 1 },
        { name: 'photoFile', maxCount: 1 },
    ]),
    completeRegistration
);

module.exports = router;
