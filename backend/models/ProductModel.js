const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// We are adding virtual, because mongodb "id" along with "_id".
const opts = { toJSON: { virtuals: true } };


const productSchema  = new Schema({
    url:String,
    detailUrl:String,
    title:{
        shortTitle:String,
        longTitle:String
    },
    price:{
        mrp:Number,
        cost:Number,
        discount:String
    },
    description:String,
    discount:String,
    tagline:String,
    category:String,
    }, opts);

module.exports = {
    ProductSchema: mongoose.model("Products", productSchema ),
};
