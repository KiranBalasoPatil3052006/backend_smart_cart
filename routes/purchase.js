//backend/routes/purchase.js

const express = require("express");
const router = express.Router();
const PurchaseHistory = require("../models/PurchaseHistory");

// ===== POST: Save purchase =====
router.post("/", async (req, res) => {
  try {
    const { customerName, mobile, products, paymentMethod, cashierCode } = req.body;

    if (!customerName || !mobile || !products || !products.length) {
      return res.status(400).json({ success: false, message: "Missing required fields ❌" });
    }

    const purchase = new PurchaseHistory({
      customerName,
      mobile,
      products,
      paymentMethod: paymentMethod || 'cash',
      cashierCode: paymentMethod === 'cash' ? cashierCode : null
    });

    await purchase.save();
    res.status(201).json({ success: true, message: "Purchase saved ✅" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error saving purchase ❌", error: err });
  }
});

// ===== GET: Purchase history =====
router.get("/", async (req, res) => {
  try {
    const purchases = await PurchaseHistory.find().sort({ date: -1 });
    res.json(purchases);
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching history ❌", error: err });
  }
});

// ===== GET: Cash-only purchases =====
router.get("/cash", async (req, res) => {
  try {
    const purchases = await PurchaseHistory.find({ paymentMethod: 'cash' }).sort({ date: -1 });
    res.json(purchases);
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching cash purchases ❌", error: err });
  }
});

// ===== GET: Online-only purchases =====
router.get("/online", async (req, res) => {
  try {
    const purchases = await PurchaseHistory.find({ paymentMethod: 'online' }).sort({ date: -1 });
    res.json(purchases);
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching online purchases ❌", error: err });
  }
});

module.exports = router;
