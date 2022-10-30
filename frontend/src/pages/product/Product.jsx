import React, { useContext, useEffect, useState } from 'react'
import "./product.css"
import { products } from '../../utils/productData';

import { Divider } from '@mui/material';
import { useParams, useNavigate } from 'react-router';
import CircularProgress from '@mui/material/CircularProgress';
// import { Logincontext } from "../context/Contextprovider";
import moment from "moment";
import { fetchingASpecificProduct, fetchingProductsSameCategory } from '../../features/productSlice/productAction';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../components/footer/Footer';
import SameCategoryItems from '../../components/product/SameCategoryItems';

function Product() {

    const { id } = useParams();
    const {product, isLoading} = useSelector(state => state.products)
    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(fetchingASpecificProduct(id))
    },[])



    return (
        <div className="cart_section">

                <div className="cart_container">

                    <div className="left_cart">
                        <img src={product?.detailUrl} alt="cart" />
                    </div>


                    <div className="center_cart">
                        <h3>{product?.title?.shortTitle}</h3>
                        <h4>{product?.title?.longTitle}</h4>
                        <Divider />
                        <p className="mrp">M.R.P. : <del>${product?.price?.mrp}</del></p>
                        <p>Deal of the Day : <span style={{ color: "#B12704" }}>${product?.price?.cost}.00</span></p>
                        <p>You save : <span style={{ color: "#B12704" }}> ${product?.price?.mrp - product?.price?.cost} ({product?.price?.discount}) </span></p>

                        <div className="discount_box">
                            <h5 >Discount : <span style={{ color: "#111" }}>{product?.discount}</span> </h5>

                        </div>
                        <p className="description">About the item : <span style={{ color: "#565959", fontSize: "14px", fontWeight: "500", letterSpacing: "0.4px" }}>{product?.description}</span></p>
                    </div>


                    <div className='right_cart'>

                        <div>
                            <div className='top'>
                                <p>Buy new:</p>
                                <span>${product?.price?.cost.toFixed(2)}</span>
                            </div>
                            
                            <div className='free_shipping'>
                                <p>Get{" "}
                                <span> Fast, Free Shipping </span> {" "}
                                with</p>
                            </div>

                            <div className="free_delivery">
                                <p><span className='free'>Free delivery</span> {" "}<span className='delivery_date'>{moment().add(5, 'days').format('llll').slice(0,18)}
                                </span>if you spend $25 on items shipped by Amazon</p>
                            </div>

                            <div className="fast_delivery">
                                <p>Or fastest delivery {" "}<span className='delivery_date'>{moment().add(2, 'days').format('llll').slice(0,18)}
                                </span>. Order within <span className="fast_date">21 hrs 24 mins</span></p>
                            </div>

                            <div className='inStock'>
                                In Stock
                            </div>

                        </div>

                    
                        <div className="cart_btn">
                            <button className="cart_btn1" 
                            // onClick={() => addToCart(data.id)}
                            
                            >Add to Cart</button>
                            <button className="cart_btn2">Buy Now</button>
                        </div>

                    </div>

                </div>


            {isLoading ? <div className="circle">
                <CircularProgress />
                <h2> Loading....</h2>
            </div> : ""}


            <div>
                {
                product.category &&
                <SameCategoryItems  productId = {id} category={product.category}/>
                }
            </div>


            <div className='productFooter'>
                <Footer/>
            </div>


        </div>
    )
}

export default Product