
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


const getASpecificCategoryProduct = async (req, res) =>{

    const {category} = req.query
    try{
        const Products = await ProductSchema.find({category: category});

        res.status(200).json(Products);
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
    
}


const updateProduct = async (req, res) =>{
    
    try{
        const Product = await ProductSchema.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            { new:true}
            );

        res.status(200).json(Product);
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
    
}

module.exports = {
    createProduct,
    getAllProducts,
    getASpecificProduct,
    updateProduct,
    getASpecificCategoryProduct
}