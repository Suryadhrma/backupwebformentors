const mongoose = require('mongoose');

const courseValidationSchema = new mongoose.Schema({
    mentor: { type: mongoose.Schema.Types.ObjectId, ref: 'Mentor', required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    status: { type: String, enum: ['Menunggu Konfirmasi', 'Diterima', 'Ditolak'], default: 'Menunggu Konfirmasi' },
    rejectionReason: { type: String }, // Alasan ditolak jika status = 'Ditolak'
}, { timestamps: true });

module.exports = mongoose.model('CourseValidation', courseValidationSchema);
