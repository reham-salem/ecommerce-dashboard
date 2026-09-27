const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;
const productsRouter = require('./routes/products');

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());
app.use('/products', productsRouter); 

app.get('/', (req, res) => {
  res.send('E-commerce Dashboard API is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});