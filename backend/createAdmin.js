const mongoose = require('mongoose');
const Admin = require('./models/Admin');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const createAdmin = async () => {
    try {
        const admin = new Admin({
            fullName: 'Super Admin',
            email: 'admin@example.com',
            password: 'admin123', // Password aman
        });

        await admin.save();
        console.log('Admin created successfully');
        process.exit();
    } catch (err) {
        console.error('Error creating admin:', err.message);
        process.exit(1);
    }
};

createAdmin();
