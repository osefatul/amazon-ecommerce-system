import React, { useContext, useEffect, useState } from 'react'
import "./product.css"
import { products } from '../../utils/productData';

import { Divider } from '@mui/material';
import { useParams, useNavigate } from 'react-router';
import CircularProgress from '@mui/material/CircularProgress';
// import { Logincontext } from "../context/Contextprovider";
import moment from "moment";

function Product() {

    // const { account, setAccount } = useContext(Logincontext);
    // console.log(account);



    const { id } = useParams("");

    console.log(id);

    const navigate = useNavigate()
    const [inddata, setIndedata] = useState("");

    // console.log([inddata]);

    // const getinddata = async () => {
    //     const res = await fetch(`/getproductsone/${id}`, {
    //         method: "GET",
    //         headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json"
    //         },
    //         credentials: "include"
    //     });

    //     const data = await res.json();
    //     // console.log(data);

    //     if (res.status !== 201) {
    //         alert("no data available")
    //     } else {
    //         // console.log("ind mila hain");
    //         setIndedata(data);
    //     }
    // };

    useEffect(() => {
        // setTimeout(getinddata, 1000)
        console.log(products)
        setIndedata(
            products.filter(product => product.id === id)
        )
        console.log("this is ", inddata)
    }, []);

    // const addtocart = async (id) => {
    //     console.log(id);
    //     const check = await fetch(`/addcart/${id}`, {
    //         method: "POST",
    //         headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             inddata
    //         }),
    //         credentials: "include"
    //     });
    //     // console.log(check);
    //     const data1 = await check.json();
    //     // console.log(data1 +  'ok');

    //     if (check.status !== 201) {
    //         alert("no data available")
    //     } else {
    //         // console.log("cart add ho gya hain");
    //         setAccount(data1)
    //         history.push("/buynow");
    //     }
    // }

    return (

        <div className="cart_section">

                <div className="cart_container">

                    <div className="left_cart">
                        <img src={inddata[0]?.detailUrl} alt="cart" />
                    </div>


                    <div className="center_cart">
                        <h3>{inddata[0]?.title?.shortTitle}</h3>
                        <h4>{inddata[0]?.title?.longTitle}</h4>
                        <Divider />
                        <p className="mrp">M.R.P. : <del>${inddata[0]?.price?.mrp}</del></p>
                        <p>Deal of the Day : <span style={{ color: "#B12704" }}>${inddata[0]?.price?.cost}.00</span></p>
                        <p>You save : <span style={{ color: "#B12704" }}> ${inddata[0]?.price.mrp - inddata[0]?.price.cost} ({inddata[0]?.price?.discount}) </span></p>

                        <div className="discount_box">
                            <h5 >Discount : <span style={{ color: "#111" }}>{inddata[0]?.discount}</span> </h5>

                        </div>
                        <p className="description">About the Iteam : <span style={{ color: "#565959", fontSize: "14px", fontWeight: "500", letterSpacing: "0.4px" }}>{inddata[0]?.description}</span></p>
                    </div>


                    <div className='right_cart'>

                        <div>

                            <div className='top'>
                                <p>Buy new:</p>
                                <span>${inddata[0]?.price?.cost.toFixed(2)}</span>
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
                            // onClick={() => addtocart(inddata.id)}
                            
                            >Add to Cart</button>
                            <button className="cart_btn2">Buy Now</button>
                        </div>

                    </div>

                </div>


            {!inddata ? <div className="circle">
                <CircularProgress />
                <h2> Loading....</h2>
            </div> : ""}

        </div>
    )
}

export default Product