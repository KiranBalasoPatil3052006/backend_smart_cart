//backend/models/cashintent.js
const mongoose = require('mongoose');

const cashIntentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  cashierCode: { type: String, required: true },
  date: { type: Date, default: Date.now },
  expiresAt: { type: Date, default: () => new Date(Date.now() + 15 * 60 * 1000) }
});

// ✅ Prevent OverwriteModelError
module.exports = mongoose.models.CashIntent || mongoose.model('CashIntent', cashIntentSchema);
