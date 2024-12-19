const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema(
    {
        fullName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String },
        googleId: { type: String },
        appleId: { type: String },
        cvFile: { type: String },
        ktpFile: { type: String },
        photoFile: { type: String },
        portfolioLink: { type: String },
        roles: [{ type: String }],
        agreedPrivacyPolicy: { type: Boolean, default: false },
        status: {
            type: String,
            enum: ['Menunggu Konfirmasi', 'Diterima', 'Ditolak'],
            default: 'Menunggu Konfirmasi',
        },        
    },
    { timestamps: true }
);

// Tambahkan method ke schema
mentorSchema.methods.isAccountActive = function () {
    return this.status === 'Diterima';
};

module.exports = mongoose.model('Mentor', mentorSchema);
