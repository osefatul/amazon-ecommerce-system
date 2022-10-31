import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from "../../features/cartSlice/cartSlice";
import Header from "../../components/header/Header"
import "./successCheckout.css"
import {CheckCircle} from '@mui/icons-material/';
import { Link } from 'react-router-dom';


function SuccessCheckout() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearCart());
    }, [dispatch]);

    return (
        <div className='successCheckoutPage'>

            <div>
                <Header />
            </div>

            <div className="checkoutSection">

                <div className='checkoutSection_body'>

                    <h3 className='checkout_title'>
                        <span>
                            <CheckCircle style={{fill: "green"}} />
                        </span>
                        Thank you, your order has been confirmed!
                    </h3>

                    <div className='checkout_body'>
                        <p>
                            Thank you for shopping with us. We will send a confirmation once your item has shipped. if you would like to check the status of your order(s) please press the link below.
                        </p>
                        <p style={{paddingTop:"10px"}}>
                            In case of any enquiries contact the support at{" "}
                            <strong className='font-bold'>support@amazon.com</strong>
                        </p>
                    </div>

                    <button className='orderLink' >
                        <Link to={'/orders'}>
                        Go to my orders
                        </Link>
                    </button>

                </div>
            </div>

        </div>
    )
}

export default SuccessCheckout