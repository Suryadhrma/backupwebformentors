const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const Mentor = require('../models/Mentor');

module.exports = (req, res, next) => {
    const authHeader = req.header('Authorization');
    console.log('Authorization Header:', authHeader); // Log header untuk debugging
  
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      console.log('Access Denied: No or malformed token');
      return res.status(401).json({ message: 'Access Denied' });
    }
  
    const token = authHeader.split(' ')[1];
    console.log('Extracted Token:', token);
  
    try {
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      console.log('Token Verified:', verified);
      req.user = verified;
      next();
    } catch (err) {
      console.log('Invalid Token:', err.message);
      return res.status(400).json({ message: 'Invalid Token' });
    }
  };
