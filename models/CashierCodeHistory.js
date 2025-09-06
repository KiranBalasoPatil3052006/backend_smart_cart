const mongoose = require('mongoose');

const cashierCodeHistorySchema = new mongoose.Schema({
  cashierCode: { type: String, required: true },
  mobile: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  verified: { type: Boolean, default: false }, // Add this
  verifiedAt: { type: Date, default: null } // Add this
});

module.exports = mongoose.model('CashierCodeHistory', cashierCodeHistorySchema);

