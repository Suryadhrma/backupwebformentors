const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    photo: { type: String },
    videoHighlight: { type: String },
    price: { type: Number, required: true },
    participants: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    meetings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Meeting' }],
    status: { type: String, default: 'Menunggu Konfirmasi' }, // Status course
    rejectionReason: { type: String }, // Alasan penolakan
    mentor: { type: mongoose.Schema.Types.ObjectId, ref: 'Mentor' }, // Mentor yang membuat course
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Course', courseSchema);
