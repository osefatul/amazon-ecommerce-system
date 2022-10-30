const express = require('express');
const { createProduct, getAllProducts, getASpecificProduct, updateProduct, getASpecificCategoryProduct } = require('../controllers/productController');
const router = express.Router();


router.get("/same-category", getASpecificCategoryProduct)
router.post("/", createProduct)
router.get("/", getAllProducts)
router.get("/:id", getASpecificProduct)
router.put("/:id", updateProduct)

module.exports = router