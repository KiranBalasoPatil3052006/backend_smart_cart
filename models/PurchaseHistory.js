const mongoose = require('mongoose');

const purchaseHistorySchema = new mongoose.Schema({
  name: { type: String, required: true }, // ✅ match server.js
  mobile: { type: String, required: true },
  email: { type: String },
  products: [{
    barcode: String,
    name: String,
    price: Number,
    quantity: Number
  }],
  paymentMethod: { type: String, enum: ['cash', 'online'], default: 'cash' },
  cashierCode: { type: String }, // only if cash
  date: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('PurchaseHistory', purchaseHistorySchema);
