const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    details: { type: String, default: '' }, // Rincian kegiatan
    documentation: { type: String }, // File dokumentasi (path file)
    taskText: { type: String },
    taskFile: { type: String },
    materials: { type: String }, // Materi pembelajaran tambahan
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Meeting', meetingSchema);
