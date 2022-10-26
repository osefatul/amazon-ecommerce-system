
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

module.exports = {
    createProduct
}