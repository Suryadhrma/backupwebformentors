const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const user = require('./models/user')

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(express.json()); // Untuk menangani JSON payload
app.use(express.urlencoded({ extended: true })); // Untuk menangani form data


// Koneksi ke MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));
  


    const userRoutes = require('./routes/userroutes');
    app.use(userRoutes);


// Jalankan server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
