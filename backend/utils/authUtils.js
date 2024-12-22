// utils/authUtils.js
const jwt = require('jsonwebtoken');

const generateToken = (mentor) => {
  return jwt.sign(
    {
      id: mentor._id, // Sertakan ID mentor
      email: mentor.email,
      roles: mentor.roles, // Jika ada peran
    },
    process.env.JWT_SECRET,
    { expiresIn: '7d' } // Token berlaku selama 7 hari
  );
};

module.exports = { generateToken };
