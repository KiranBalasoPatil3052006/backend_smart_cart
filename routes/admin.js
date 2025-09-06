//backend/routes/admin.js

const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');

// One-time admin create (optional)
router.post('/create', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email & password required" });
    }
    await new Admin({ email, password }).save();
    res.json({ success: true, message: 'Admin created successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Admin login
router.post('/login', async (req, res) => {
  try {
    const admin = await Admin.findOne({
      email: req.body.email,
      password: req.body.password
    });
    if (!admin) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
    res.json({ success: true, message: 'Login successful', email: req.body.email });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
});

module.exports = router;
