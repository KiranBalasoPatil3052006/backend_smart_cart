const mongoose = require('mongoose');
const Product = require('./models/Product');

const atlasUri = 'mongodb+srv://kiranbalasopatil33:smartcart2025@cluster0.h7e8od5.mongodb.net/smartcart?retryWrites=true&w=majority';

mongoose
  .connect(atlasUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(async () => {
    const products = [
      { barcode: '189943756592', name: 'Milk Packet', price: 25 },
      { barcode: '218285417523', name: 'Bread', price: 30 },
      { barcode: '142186738718', name: 'Toothpaste', price: 45 },
      { barcode: '653706002047', name: 'Soap Bar', price: 20 },
      { barcode: '495428788836', name: 'Notebook', price: 50 },
      { barcode: '773557903680', name: 'Chocolate', price: 35 }
    ];

    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('✅ Products inserted successfully');
  })
  .catch((e) => console.error('❌ Insert failed', e))
  .finally(() => mongoose.connection.close());
