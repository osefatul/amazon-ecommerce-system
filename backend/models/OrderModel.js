const mongoose = require('mongoose');


const OrderSchema = mongoose.Schema({
    userId: { type: String, required: true },
    products: [
        {
        productName: { type: String},
        productType: { type: String},
        bookingId: { type: String},
        productId: { type: String }, 
        quantity: { type: Number, default: 1 } 
    },
    ],
    subtotal: { type: Number, required: true },
    total: { type: Number, required: true },
    shipping: { type: Object, required: true },
    delivery_status: { type: String, default: "pending" },
    payment_status: { type: String, required: true },
    },
    { timestamps: true }
)

const Order = mongoose.model("Order", OrderSchema);

exports.Order = Order;