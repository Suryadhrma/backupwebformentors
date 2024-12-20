const jwt = require('jsonwebtoken');

function generateToken(user) {
  const payload = { id: user._id, role: user.role }; // Sesuaikan dengan data user Anda
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
}

function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = { generateToken, verifyToken };
