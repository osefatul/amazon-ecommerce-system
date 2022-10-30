import { Divider } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Empty from '../../components/cart/Empty';
import Option from '../../components/cart/Option';
import Sidebar from '../../components/cart/Sidebar';
import Subtotal from '../../components/cart/Subtotal';
import Footer from '../../components/footer/Footer';
import { getTotals } from '../../features/cartSlice/cartSlice';
import "./cart.css"


function Cart() {

    const {cartItems} = useSelector(state => state.cart)
    const [data, setData] = useState(cartItems)
    const dispatch = useDispatch();


    useEffect(() =>{
        dispatch(getTotals())
    },[cartItems])

    useEffect(() =>{
        setData(cartItems)
    },[cartItems])


return (
    <div className='cart_page'>
        {data.length ?
            <div className="buynow_section">
                <div className="buynow_container">
                    <div className="left_buy">
                        <h1>Shopping Cart</h1>
                        <p>Select all items</p>
                        <span className="leftbuyprice">Price</span>
                        <Divider />

                        {
                            data.map((e, ind) => {
                                return (
                                    <div div key={ind}>
                                        <div className="item_containert" key={ind}>
                                            <img src={e.detailUrl} alt="imgitem" />
                                            <div className="item_details">
                                                <h3>{e.title?.longTitle}</h3>
                                                <h3>{e.title?.shortTitle}</h3>
                                                <h3 className="diffrentprice">${e.price.cost * e.cartQuantity}.00</h3>
                                                {/* <p className="unusuall">Usually dispatched in 8 days.</p> */}
                                                <p>Eligible for FREE Shipping</p>
                                                <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="logo" />
                                                <Option item={e}/>
                                            </div>
                                            <h3 className="item_price">${e.price.cost * e.cartQuantity}.00</h3>
                                        </div>
                                        <Divider />
                                    </div>
                                )
                            })
                        }

                        <Subtotal item={data} />
                    </div>
                    <Sidebar item={data} />
                </div>
            </div> : <Empty />
        }

        <div className='productFooter'>
            <Footer/>
        </div>
    </div>
)
}

export default Cart