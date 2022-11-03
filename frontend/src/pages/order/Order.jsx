import { Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Empty from '../../components/cart/Empty'
import Footer from '../../components/footer/Footer'
import "./order.css"
import {FetchingOrdersForASpecificUser } from '../../features/ordersSlice/ordersAction'
import { Link } from 'react-router-dom'

function Order() {

    const dispatch = useDispatch()
    const {user} = useSelector(state => state.login)
    const {order} = useSelector(state => state.order)
    const [data, setData] = useState(order) 

    useEffect(() => {
        user._id && dispatch(FetchingOrdersForASpecificUser(user._id))
    },[user])

    useEffect(() =>{
        setData(order)
    },[order])


return (
    <div className='order_page'>
            <div className="orderNow_section">
                <div className="order_container">

                    <div className="Order_left_buy">
                        <h3>Your Orders</h3>
                        <p style={{paddingBottom:"3rem"}}>{data?.length} order(s)</p>

                        {
                        data.length ?
                        data.map(item => (
                            <div className='orderDetailsParent'>
                                
                                <div className="orderDetails">

                                    <div className="left_orderDetails">
                                        <p>
                                            <span style={{fontWeight:"bold", fontSize:"12px"}}>
                                                Order Placed
                                            </span>

                                            <span style={{fontSize:"12px"}}>
                                                {new Date(item.createdAt).toLocaleDateString()}
                                            </span>
                                        </p>

                                        <p>
                                            <span style={{fontWeight:"bold", fontSize:"12px"}}>
                                                Total
                                            </span>

                                            <span style={{fontSize:"12px"}}>
                                                ${item.total}
                                            </span>
                                        </p>
                                    </div>

                                    <div className="right_orderDetails">
                                        <p>
                                            <span style={{fontWeight:"bold", fontSize:"12px"}}>
                                                Order# {item._id}
                                            </span>

                                            <span style={{fontSize: "12px"}}>
                                                {item.products.length} item(s)
                                            </span>
                                        </p>
                                    </div>

                                </div>

                                <div className='order_items'>
                                
                                    {
                                    item.products.map((product, ind) => {
                                        return (
                                            <div div key={ind}>
                                                <div className="Order_item_containert" key={ind}>
                                                    <img 
                                                        src={product.productImg} 
                                                        loading="lazy"
                                                        alt="imgitem" />

                                                    <div className="Order_item_details">
                                                        <h3>{product.productName}</h3>
                                                        <p>Quantity: {product.quantity}</p>

                                                        <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="logo" />

                                                    </div>

                                                </div>

                                            </div>
                                        )
                                    })
                                    }

                                </div>

                            </div>
                        
                            )):

                            <div className="empty_orders">
                                <h4>Your Amazon Basket is empty</h4>
                                <Link to={"/"}>
                                    <p>See recommendations</p>
                                </Link>
                            </div>

                        }


                    </div>
                </div>
            </div>
        

    <div className='productFooter'>
        <Footer/>
    </div>
</div>
)
}

export default Order