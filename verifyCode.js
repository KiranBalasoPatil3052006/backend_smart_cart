function generateCashierCode() {
  return Math.floor(100000 + Math.random() * 900000).toString(); // ✅ force 6-digit string
}

module.exports = { generateCashierCode };
