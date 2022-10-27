
const {ProductSchema} = require('../models/ProductModel')


const createProduct = async (req, res) =>{
    
    try{
        const newProduct = new ProductSchema(req.body);
        await newProduct.save();

        res.status(200).json(newProduct);
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
    
}



const getAllProducts = async (req, res) =>{
    
    try{
        const Products = await ProductSchema.find();

        res.status(200).json(Products);
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
    
}



const getASpecificProduct = async (req, res) =>{
    
    try{
        const Products = await ProductSchema.findById(req.params.id);

        res.status(200).json(Products);
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
    
}

module.exports = {
    createProduct,
    getAllProducts,
    getASpecificProduct
}