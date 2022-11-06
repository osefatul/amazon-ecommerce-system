import React, { useState } from 'react'
import "./filterProduct.css"
import Footer from '../../components/footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchingProducts, fetchingSearchFilteredProduct } from '../../features/productSlice/productAction'
import RightSide from '../../components/filterProduct/RightSide'
import { useEffect } from 'react'

const initialValues = {
    min: undefined,
    max: undefined,
}


function FilterProduct() {
    const dispatch = useDispatch()
    const [category, setCategory] = useState()
    const [values, setValues] = useState(initialValues)

    
// ------------- with price tags ------------------------------
    const handleOnChange = (e) =>{
    setCategory(e.target.value)}


    const handlePrice = (min, max, e) =>{
            dispatch(fetchingSearchFilteredProduct(min, max, category))
    }




// ------------- using input field ------------------------------
    const handleOnChangeButton = (e) =>{
        setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        console.log(values)
    }

    const handleButton = (e) =>{
        e.preventDefault();

        const min = values.min;
        const max = values.max;
        
        dispatch(
            fetchingSearchFilteredProduct(
            min, 
            max, 
            category
        ))
    }


    useEffect(()=>{
        dispatch(fetchingProducts())
    },[])

    return (
        <div className='filterPage'>

            <div className='upperPage'>

                <div className='leftSide'>

                    <form className='rangeText'>
                        <h3>Categories</h3>

                        <div className='catElements'>
                            <input type="radio" 
                            name='category' 
                            value="Books"
                            onChange={handleOnChange}
                        
                            />
                            <label htmlFor="Books">Books</label>
                        </div>

                        <div className='catElements'>
                            <input type="radio" 
                            onChange={handleOnChange}
                            name='category' 
                            value="gym" />
                            <label htmlFor="gym">Gym</label>
                        </div>

                        <div className='catElements'>
                            <input type="radio" 
                            name='category' 
                            value="Kitchen"
                            onChange={handleOnChange}
                            />
                            <label htmlFor="Kitchen">Kitchen</label>
                        </div>

                        <div className='catElements'>
                            <input type="radio" 
                            name='category' 
                            value="ComputerNElectronics"
                            onChange={handleOnChange}
                            />
                            <label htmlFor="ComputerNElectronics">Computer & Electronics</label>
                        </div>

                        <div className='catElements'>
                            <input type="radio" 
                            name='category' 
                            onChange={handleOnChange}
                            value='mobile'/>
                            <label htmlFor="mobile">Mobile</label>
                        </div>

                    </form>

                    <div className='rangeText'>
                        <h3>Price</h3>
                        <p onClick={(e)=>handlePrice(1, 10)}>Under $10</p>
                        <p onClick={(e)=>handlePrice(10, 15)}>$10 to $15</p>
                        <p onClick={(e)=>handlePrice(15, 25)}>$15 to $25</p>
                        <p onClick={(e)=>handlePrice(25, 35)}>$25 to $35</p>
                        <p onClick={(e)=>handlePrice(35, 99999 )}>$35 & above</p>
                    </div>

                    <div className='rangeInput'>
                        
                        <div className='minMaxInput'>
                            <input 
                            type="tex" 
                            placeholder='$ Min' 
                            name='min'
                            onChange = {handleOnChangeButton}
                            />
                        </div>

                        <div className='minMaxInput'>
                            <input 
                            type="text" 
                            placeholder='$ Max'
                            name='max'
                            onChange = {handleOnChangeButton}
                            
                            />
                        </div>

                        <button onClick={handleButton}>Go</button>

                    </div>

                </div>



                <div className="rightSide">
                    <RightSide />
                </div>


            </div>




            <div className="filterPageFooter">
                <Footer/>
            </div>
        </div>
    )
}

export default FilterProduct