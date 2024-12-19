const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const passwordRoutes = require('./routes/passwordRoutes');
// Import Routes
const courseRoutes = require('./routes/courseRoutes');
const mentorRoutes = require('./routes/mentorRoutes')
const adminRoutes = require('./routes/adminRoutes');

require('dotenv').config();

const app = express();

connectDB();
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/password', passwordRoutes);
// Use Routes
app.use('/api/courses', courseRoutes);

app.use('/api/mentor', mentorRoutes);

// Tambahkan ini di bawah middleware yang ada
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
