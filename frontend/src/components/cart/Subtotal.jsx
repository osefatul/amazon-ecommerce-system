import React from 'react'
import { useEffect,useState } from 'react';
import "../../pages/cart/cart.css"



const Subtotal = ({item, cartTotalQuantity}) => {
    const [price, setPrice] = useState(0);

    useEffect(() => {
        totalAmount();
    }, [item]);


    const totalAmount = () => {
        let price = 0
        item.map((item) => {
            price += item.price.cost * item.cartQuantity
        });
        setPrice(price)
    }

    return (
        <div className="sub_item">
            <h3>Subtotal ({cartTotalQuantity} items):<strong style={{ fontWeight: "700", color: "#111" }}> ${price}.00</strong></h3>
        </div>
    )
}

export default Subtotal