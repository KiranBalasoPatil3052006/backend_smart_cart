

//backend/models/admin.js 

const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true } // (hash in real apps)
}, { timestamps: true });

module.exports = mongoose.model('Admin', adminSchema);
