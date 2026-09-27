const express = require('express');
const router = express.Router();

let products = [
  {
    id: 1,
    name: 'Laptop',
    price: 15000,
    description: 'لابتوب قوي للأعمال',
    imageUrl: 'https://via.placeholder.com/200',
    category: 'Electronics',
    stock: 10
  },
  {
    id: 2,
    name: 'Headphones',
    price: 800,
    description: 'سماعات لاسلكية',
    imageUrl: 'https://via.placeholder.com/200',
    category: 'Accessories',
    stock: 25
  }
];

// GET /products - كل المنتجات
router.get('/', (req, res) => {
  res.json(products);
});

// GET /products/:id - منتج واحد بالـ id
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
});

// POST /products - إضافة منتج جديد
router.post('/', (req, res) => {
  const newProduct = {
    id: products.length + 1,
    ...req.body
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT /products/:id - استبدال كامل (المفروض الـ Frontend يبعت كل الحقول)
router.put('/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }
  products[index] = { id: products[index].id, ...req.body };
  res.json(products[index]);
});

// PATCH /products/:id - تعديل جزئي (بس الحقول المرسلة)
router.patch('/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }
  products[index] = { ...products[index], ...req.body };
  res.json(products[index]);
});

// DELETE /products/:id - حذف منتج
router.delete('/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }
  products.splice(index, 1);
  res.status(204).send();
});

module.exports = router;