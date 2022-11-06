import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchingProductsSameCategory } from '../../features/productSlice/productAction';
import Slide from '../home/slide/Slide';
import "./SameCategoryItems.css"

function SameCategoryItems({category, dataId}) {

    const dispatch = useDispatch()
    const {productsBySameCategory} = useSelector(state => state.products)
    
    const similarProducts = productsBySameCategory.filter(
        product => product._id !== dataId)
    
    const [data, setData] = useState(similarProducts)


    useEffect(()=>{
        dispatch(fetchingProductsSameCategory(category))
    },[category, dispatch])
    // },[dataId, category])
    



    useEffect(()=>{
        setData(similarProducts)
    // },[similarProducts, productsBySameCategory])
},[dataId,productsBySameCategory, category, similarProducts])




    return (
        <div className='similar_items'>
            <Slide title="Similar Items" 
            products={data}/>
        </div>
    )
}

export default SameCategoryItems