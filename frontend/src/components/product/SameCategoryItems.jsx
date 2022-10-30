import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchingProductsSameCategory } from '../../features/productSlice/productAction';
import Slide from '../home/slide/Slide';

function SameCategoryItems({category, productId}) {

    const {productsBySameCategory, isLoading} = useSelector(state => state.products)
    const dispatch = useDispatch()

    const similarProducts = productsBySameCategory.filter(
        product => product._id !== productId
    )

    useEffect(()=>{
        dispatch(fetchingProductsSameCategory(category))
    },[])


    return (
        <div>

            <Slide title="Similar Items" 
            products={similarProducts}/>
        </div>
    )
}

export default SameCategoryItems