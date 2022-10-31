const {Order} = require("../models/OrderModel") 
// const moment = require("moment");


// We don't create new orders, it is triggered by Stripe webhook.
const newOrder = async (req, res, next) => {
    try{
        const newFlight = new Order(req.body);
        await newFlight.save();   
        res.status(200).json({message:"Flight successfully Added !"})
    }catch(error){
        console.log(error);
        res.status(500).json({message:error.message});
    }
}


const getAllOrders = async (req, res, next) => {
    try{
        const allOrders = await Order.find();
        res.status(200).json(allOrders);
    }catch(error){
        console.log(error);
        res.status(500).json({message:error.message});
    }
}



//get order based on userId for current user
const getOrdersForASpecificUser = async (req, res, next) => {
    // console.log(req.params.id)
    try{
        const theOrder = await Order.find({userId: req.params.id});
        res.status(200).json(theOrder);
    }catch(error){
        console.log(error);
        res.status(500).json({message:error.message});
    }
}



module.exports = {
    newOrder,
    getAllOrders,
    getOrdersForASpecificUser,
}