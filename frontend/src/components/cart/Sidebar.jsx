import React, { useEffect, useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "../../pages/cart/cart.css"
import axios from "axios"
import { useSelector } from 'react-redux';



const Sidebar = ({ item, cartTotalQuantity }) => {


    const [val, setVal] = useState(false);
    const [price, setPrice] = useState(0);
    const { cartItems} = useSelector(state => state.cart)

    // const history = useHistory("");

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



    const handleCheckout = async (e)=>{
        e.preventDefault()


        const res = await axios({
            method:"post", 
            url:"http://localhost:5000/v1/payments/" , 
            data:{cartItems }
        })

        const {url} = res.data;
        if(url)  window.location.href = url
    }

    return (
        <div className="right_buy">
            <img loading='lazy' 
            src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="rightimg" />
            <div className="cost_right">
                <p>Your order is eligible for FREE Delivery. <br />
                    <span style={{ color: "#565959" }}> Select this option at checkout. Details</span></p>
                <h3>Subtotal ({cartTotalQuantity} items): <span style={{ fontWeight: "700" }}> ${price}.00</span></h3>
                <button className="rightbuy_btn" onClick={handleCheckout} >Proceed to Buy</button>
                <div className="emi" onClick={() => setVal(!val)}>
                    Emi available
                    {!val ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </div>
                <span className={val ? "show" : "hide"}> Your order qualifies for EMI with valid credit cards (not available on purchase of Gold,
                    Jewelry, Gift cards and Amazon pay balance top up). Learn more</span>
            </div>
        </div>
    )
}

export default Sidebar;