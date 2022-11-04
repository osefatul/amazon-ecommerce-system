import React, { useState } from 'react'
import "./filterProduct.css"
import Footer from '../../components/footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchingSearchFilteredProduct } from '../../features/productSlice/productAction'



function FilterProduct() {
    const dispatch = useDispatch()
    const [category, setCategory] = useState("Books")


    const handleOnChange = (e) =>{
    setCategory(e.target.value)
    
    }


    const handlePrice = (min, max, e) =>{
        e.preventDefault();
        dispatch(fetchingSearchFilteredProduct(min, max, category))
    }

    return (
        <div className='filterPage'>

            <div className='upperPage'>

                <div className='leftSide'>

                    <form className='rangeText'>
                        <h3>Categories</h3>

                        <div className='catElements'>
                            <input type="radio" 
                            name='category' value="Books"
                            onChange={handleOnChange}
                            checked
                            />
                            <label htmlFor="Books">Books</label>
                        </div>

                        <div className='catElements'>
                            <input type="radio" 
                            onChange={handleOnChange}
                            name='category' value="gym" />
                            <label htmlFor="gym">Gym</label>
                        </div>

                        <div className='catElements'>
                            <input type="radio" 
                            name='category' value="Kitchen"
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
                            <input type="radio" name='category' 
                            onChange={handleOnChange}
                            value='mobile'/>
                            <label htmlFor="mobile">Mobile</label>
                        </div>

                    </form>



                    <div className='rangeText'>
                        <h3>Price</h3>
                        <p onClick={()=>handlePrice(10)}>Under $10</p>
                        <p>$10 to $15</p>
                        <p>$15 to $25</p>
                        <p>$25 to $35</p>
                        <p>$35 & above</p>
                    </div>


                    <div className='rangeInput'>
                        
                        <div className='minMaxInput'>
                            <input 
                            type="tex" 
                            placeholder='$ Min' 
                            name='min'/>
                        </div>

                        <div className='minMaxInput'>
                            <input 
                            type="text" 
                            placeholder='$ Max' 
                            name='max'/>
                        </div>

                        <button>Go</button>

                    </div>

                </div>



                <div className="rightSide">
                    right side
                </div>


            </div>




            <div className="filterPageFooter">
                <Footer/>
            </div>
        </div>
    )
}

export default FilterProduct