const express = require('express');

const router = express.Router();
const productController = require('../controllers/productController');
const categoryController = require('../controllers/categoryController');

// GET
router.get('/products', productController.getAllProducts);


// POST

// PUT

// DELETE


module.exports = router;