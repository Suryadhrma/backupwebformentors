const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const passwordRoutes = require('./routes/passwordRoutes');
// Import Routes
const courseRoutes = require('./routes/courseRoutes');
const mentorRoutes = require('./routes/mentorRoutes');

const adminRoutes = require('./routes/adminRoutes');
const courseValidationRoutes = require('./routes/courseValidationRoutes');

const adminAuthRoutes = require('./routes/adminAuthRoutes');
const { authenticateAdmin } = require('./middleware/adminAuthMiddleware');


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
// Tambahkan route login admin
app.use('/api/admin/auth', adminAuthRoutes);

// Lindungi route admin
app.use('/api/admin', authenticateAdmin, adminRoutes);
app.use('/api/validation', authenticateAdmin, courseValidationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));