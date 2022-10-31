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
                            <h4>Festive latest launches</h4>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg" alt="rightimg" />
                            <a href="#!">see more</a>
                        </div>
                    </div>

                    <Slide title="Today's Deal" 
                        products={data}

                    />

                    <div className="center_img">
                        <img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt="" />
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