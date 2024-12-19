const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Mentor = require('../models/Mentor');
const passport = require('passport');


// Register Mentor
exports.registerMentor = async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword, agreedPrivacyPolicy } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newMentor = new Mentor({
      fullName,
      email,
      password: hashedPassword,
      agreedPrivacyPolicy
    });

    await newMentor.save();
    res.status(201).json({ message: 'Registration successful', mentor: newMentor });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

    // Login Mentor
    exports.loginMentor = async (req, res) => {
        try {
        const { email, password } = req.body;
        const mentor = await Mentor.findOne({ email });
    
        if (!mentor) {
            return res.status(404).json({ message: 'Mentor not found' });
        }
    
        // Periksa status akun mentor
        if (mentor.status === 'Menunggu Konfirmasi') {
            return res.status(403).json({ message: 'Your account is pending approval by the admin' });
        }
    
        if (mentor.status === 'Ditolak') {
            return res.status(403).json({ message: 'Your account request has been rejected' });
        }
    
        const isPasswordValid = await bcrypt.compare(password, mentor.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
    
        const token = jwt.sign({ id: mentor._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ message: 'Login successful', token });
        } catch (err) {
        res.status(500).json({ message: err.message });
        }
    };
  
// Complete Mentor Registration
exports.completeRegistration = async (req, res) => {
    try {
        const { mentorId } = req.params;
        const { portfolioLink, roles } = req.body;
        const cvFile = req.files?.cvFile?.[0]?.path;
        const ktpFile = req.files?.ktpFile?.[0]?.path;
        const photoFile = req.files?.photoFile?.[0]?.path;

        const mentor = await Mentor.findById(mentorId);
        if (!mentor) return res.status(404).json({ message: 'Mentor not found' });

        // Update mentor with additional registration details
        if (portfolioLink) mentor.portfolioLink = portfolioLink;
        if (roles) mentor.roles = roles.split(','); // Assuming roles are sent as a comma-separated string
        if (cvFile) mentor.cvFile = cvFile;
        if (ktpFile) mentor.ktpFile = ktpFile;
        if (photoFile) mentor.photoFile = photoFile;

        await mentor.save();
        res.status(200).json({ message: 'Registration completed successfully', mentor });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error completing registration', error: err });
    }
};

