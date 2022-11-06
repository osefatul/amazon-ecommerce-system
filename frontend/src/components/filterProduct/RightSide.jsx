import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import "./rightSide.css"
import StarIcon from '@mui/icons-material/Star';
import { Navigate, useNavigate } from 'react-router-dom';

function RightSide() {

    const navigate = useNavigate()
    const {products} = useSelector(state => state.products)
    const [data, setData] = useState(products)
    


    useEffect(()=> {
        setData(products)
    },[products])


return (
    <div>
        <div className='topText'>
            <h3>RESULTS</h3>
            <p>
                Price and other details may vary based on product size and color
            </p>
        </div>

        {
            data.length>0?
            data.map(product => (

            <div className='productContainer' key={product._id}
            onClick={() => navigate(`/products/${product._id}`)}
            >
                <div className='productImg'>
                    <img style={{width:"7rem", height:"10rem", backgroundColor:"#F8F8F8"}} loading = "lazy" src={product.url} alt="" />
                </div>

                <div className='productDetails'>
                    <p>{product.title.longTitle}</p>
                    <span className='rating'>
                        <StarIcon style={{color:"orange"}}/>
                        <StarIcon style={{color:"orange"}}/>
                        <StarIcon style={{color:"orange"}}/>
                        <StarIcon style={{color:"orange"}}/>
                        <StarIcon style={{color:"orange"}}/>
                    </span>

                    <span style= {{fontSize:"1rem", fontWeight:"500"}} className="price">
                        ${product.price.cost}
                    </span>

                    <span>
                        ship to Canada
                    </span>
                </div>
            </div>

            ))
        :
        <div className='noItemFound'>
            No items found
        </div>

        }
        

    </div>
)
}

export default RightSide