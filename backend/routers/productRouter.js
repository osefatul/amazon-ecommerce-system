const express = require('express');
const { createProduct } = require('../controllers/productController');
const router = express.Router();


router.post("/", createProduct)
router.get("/products")
router.get("/products/:id")
router.get("/products/same-category")

module.exports = router