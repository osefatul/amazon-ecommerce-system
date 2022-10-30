import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "../../pages/cart/cart.css"
import {removeFromCart, addMultipleToCart} from "../../features/cartSlice/cartSlice"

const Option = ({ item }) => {

    const options = [1,2,3,4,5,6,7,8,9,10]
    const dispatch = useDispatch();

    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };

    const handleOnChange = (e, item) => {
        e.preventDefault();

        dispatch(addMultipleToCart({id:item._id, quantity: + e.target.value} ))
        console.log(e.target.value)
    }

    return (
        <div className="add_remove_select" key={item._id}>
            <select name="cart" id="" onChange={e => handleOnChange(e,item)}>
                <option selected="selected">
                    {item.cartQuantity}
                </option>
                {options.map((option, index) =>(
                    
                    <option key={index} value={option}>{option}</option>
                ))}

            </select>
            <p onClick={() => handleRemoveFromCart(item)} style={{ cursor: "pointer" }}>Delete</p><span>|</span>
            <p className="forremovemedia">Save Or Later</p><span>|</span>
            <p className="forremovemedia">See More like this</p>
        </div>

    )
}

export default Option;