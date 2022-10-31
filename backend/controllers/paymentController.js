const stripe = require("stripe")(process.env.SECRET_KEY)
const { Stripe } = require("stripe");
const { Order } = require("../models/OrderModel");
const domainUrl = process.env.DOMAIN_URL;

let productsData = [];

//Stripe Payment process...
const StripePayment = async (req, res, next) => {

    const customer = await stripe.customers.create({
        metadata: {
        userId: req.body.userId,
        cart: JSON.stringify(req.body.cartItems.length),
        },
    });

    const line_items = req.body.cartItems.map((item) => {
        return {
            price_data: {
                currency: "usd",
                product_data: {
                name: item.name,
                description: item.desc,
                metadata: {
                    id: item.id || item._id,
                },
                },
                unit_amount: item.price * 100,
            },
            quantity: item.itemQuantity,
            };
    });

    productsData = [...req.body.cartItems] 

    if(!line_items) {
        return res.status(400).json({error: "missing required session parameters"});
    }


    try {
        const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: 'payment',
        customer:customer.id,
        line_items,
        success_url: `${domainUrl}checkout-success`,
        cancel_url: `${domainUrl}cart`,
        shipping_address_collection: {allowed_countries: ['US', "GB", "CA"]},
        shipping_options: [
            {
            shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
                amount: 0,
                currency: "usd",
            },
            display_name: "Free shipping",
            // Delivers between 5-7 business days
            delivery_estimate: {
                minimum: {
                unit: "business_day",
                value: 5,
                },
                maximum: {
                unit: "business_day",
                value: 7,
                },
            },
            },
        },
        {
            shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
                amount: 1500,
                currency: "usd",
            },
            display_name: "Next day air",
            // Delivers in exactly 1 business day
            delivery_estimate: {
                minimum: {
                unit: "business_day",
                value: 1,
                },
                maximum: {
                unit: "business_day",
                value: 1,
                },
            },
            },
        },
        ],

        phone_number_collection: {
            enabled: true,
        },

        });

        res.status(200).json({url:session.url  });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message});
    }
}



// Create order function
const createOrder = async (customer, data) => {
    // const Items = JSON.parse(customer.metadata.cart);
    // console.log("This is from Items", Items);

    const products = await productsData.map((item) => {
    return {
    productName:item.name,
    productType:item.type,
    bookingId:item.bookingId || null,
    productId: item.id || item._id,
    quantity: item.itemQuantity,
    };
});

const newOrder = await  new Order({
    userId: customer.metadata.userId,
    customerId: data.customer,
    paymentIntentId: data.payment_intent,
    products,
    subtotal: data.amount_subtotal,
    total: data.amount_total,
    shipping: data.customer_details,
    payment_status: data.payment_status,
});

try {
    const savedOrder = await newOrder.save();
    //You can send email here... email(savedOrder)
    console.log("Processed Order:", savedOrder);
    
} catch (err) {
    console.log(err);     

}
};



const webhook = async(req, res) =>{
    // This is your Stripe CLI webhook secret for testing your endpoint locally.
    let eventType;
    let data;
    let webhookSecret;
    // const endpointSecret = "whsec_2664c87d590d9af9da1d94e85bef5c2815f699a2e0e19e7902ba07b3cf1d95f9";

    if(webhookSecret){
    let event;
    const sig = req.headers['stripe-signature'];

    try {
        event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        webhookSecret
        );
        } catch (err) {
            console.log(`⚠️  Webhook signature verification failed:  ${err}`);
            return res.sendStatus(400);
        }
        // Extract the object from the event.
        data = event.data.object;
        eventType = event.type;
    
    } else {
        // Webhook signing is recommended, but if the secret is not configured in `config.js`,
        // retrieve the event data directly from the req body.
        data = req.body.data.object;
        eventType = req.body.type;
    }

    
    // Handle the event
    switch (eventType) {

        case 'checkout.session.completed':
            stripe.customers
                .retrieve(data.customer)
                    .then(async (customer) => {
                        console.log(customer);
                        console.log("this from data:", data)
                        console.log("productData:", productsData)
                        
                    // Create Order:
                        try{
                            createOrder(customer, data);
                        }catch(error){
                            console.log(typeof createOrder);
                            console.log(error);
                        }
                }).catch(error => (console.log(error)))

            //Retrieving listLine Items.
            // stripe.checkout.sessions.listLineItems(
            //         data.id,
            //         { limit: 5 },
            //         function(err, lineItems) {
            //           // asynchronously called
            //         console.log("This is from lineItems", lineItems)
            //         console.log("This is from lineItems", lineItems.data.price)

            //         }
            //     );
            break;
        

    }
    
    // Return a 200 res to acknowledge receipt of the event
    res.send().end();
}



module.exports = {
    StripePayment,
    webhook,
    createOrder
}