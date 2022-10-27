const express = require('express');
const { createProduct, getAllProducts, getASpecificProduct } = require('../controllers/productController');
const router = express.Router();


router.post("/", createProduct)
router.get("/", getAllProducts)
router.get("/:id", getASpecificProduct)
router.get("/same-category")

module.exports = router