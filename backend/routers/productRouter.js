const express = require('express');
const { createProduct, getAllProducts, getASpecificProduct, updateProduct, getASpecificCategoryProduct, deleteProduct, searchProducts } = require('../controllers/productController');
const router = express.Router();


router.get("/same-category", getASpecificCategoryProduct)
router.post("/", createProduct)
router.get("/searchItems", searchProducts)
router.get("/", getAllProducts)
router.get("/:id", getASpecificProduct)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)


module.exports = router