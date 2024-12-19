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
    status: { type: String, default: 'active' }, // Status course (active, completed)
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Course', courseSchema);
