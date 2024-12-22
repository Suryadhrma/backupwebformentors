const bcrypt = require('bcryptjs');

async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10); // Buat salt
    const hashedPassword = await bcrypt.hash(password, salt); // Hash password
    console.log(`Hashed password: ${hashedPassword}`);
}

hashPassword("password123"); // Ganti "password123" dengan password Anda
