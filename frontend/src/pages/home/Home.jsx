import {React, useEffect, useState} from 'react'
import Banner from '../../components/home/banner/Banner'
import Slide from '../../components/home/slide/Slide'
import { Divider } from '@mui/material';
import "./home.css"
import HeaderList from '../../components/headerList/HeaderList';
import Footer from '../../components/footer/Footer';

import { useDispatch, useSelector } from "react-redux"
import { fetchingProducts } from '../../features/productSlice/productAction';




function Home() {

    const dispatch = useDispatch()
    const {products} = useSelector(state => state.products)

    const [data, setData] = useState(products)


    useEffect(()=>{
        dispatch(fetchingProducts())
    },[])

    
    useEffect(()=>{
        setData(products)
    },[products])
    
    // console.log(data)

    return (
        <div className='homePage'>

            <div className="home_section">

                <div className="banner_part">
                    <Banner />
                </div>

                <div className='categories'>
                    <div className="slide_part">

                        <div className="left_slide">
                            <Slide title="Deal Of The Day" 
                            products={data}
                            />
                        </div>

                        <div className="right_slide">
                            <h4>Transform your workout</h4>
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/sports/Okennel/Holiday/Gateway/2022_hol_desktop_Fitness2_379x304._SY304_CB610189864_.jpg" alt="rightimg" />
                            <a href="#!">see more</a>
                        </div>
                    </div>

                    <Slide title="Today's Deal" 
                        products={data}

                    />

                    <div className="center_img">
                        <img src="https://m.media-amazon.com/images/I/6141k-vJ-vL._SX3000_.jpg" alt="" />
                    </div>

                    <Slide title="Best Seller" 
                    products={data} 
                    />
                    <Slide title="Upto 80% off" 
                    products={data} 
                    />
                </div>

            </div>

            <Divider />

            <div className='homeFooter'>
                <Footer/>
            </div>

        </div>
    )
}

export default Home