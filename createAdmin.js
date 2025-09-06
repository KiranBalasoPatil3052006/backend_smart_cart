// backend/createAdmin.js
const mongoose = require('mongoose');
const Admin = require('./models/Admin');

const atlasUri = 'mongodb+srv://kiranbalasopatil33:smartcart2025@cluster0.h7e8od5.mongodb.net/smartcart?retryWrites=true&w=majority';

mongoose.connect(atlasUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(async () => {
    console.log("✅ Connected to MongoDB Atlas");

    // Optional: reset existing admin users
    await Admin.deleteMany({});

    // Create new default admin
    const newAdmin = new Admin({
      email: 'adminlogin123@gmail.com',
      password: 'reset123' // ⚠️ use bcrypt hashing in real apps
    });

    await newAdmin.save();
    console.log('✅ Admin created successfully');

  })
  .catch((e) => {
    console.error('❌ Failed creating admin:', e.message);
  })
  .finally(() => mongoose.connection.close());
