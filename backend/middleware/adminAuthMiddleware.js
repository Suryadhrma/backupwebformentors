const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

exports.authenticateAdmin = async (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const admin = await Admin.findById(decoded.id);
        if (!admin) return res.status(401).json({ message: 'Admin not found' });

        req.admin = admin; // Tambahkan admin ke request
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};
