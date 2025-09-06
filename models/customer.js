// models/customer.js

const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true, unique: true }, // prevent duplicate mobile numbers
  email: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.models.Customer || mongoose.model('Customer', customerSchema);