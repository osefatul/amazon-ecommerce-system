import React from 'react'
import Banner from '../../components/home/banner/Banner'
import Slide from '../../components/home/slide/Slide'
import { Divider } from '@mui/material';
import "./home.css"
import HeaderList from '../../components/headerList/HeaderList';




function Home() {
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
                            // products={products} 
                            />
                        </div>

                        <div className="right_slide">
                            <h4>Festive latest launches</h4>
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg" alt="rightimg" />
                            <a href="#!">see more</a>
                        </div>
                    </div>

                    <Slide title="Today's Deal" 
                    // products={products} 
                    />

                    <div className="center_img">
                        <img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt="" />
                    </div>

                    <Slide title="Best Seller" 
                    // products={products} 
                    />
                    <Slide title="Upto 80% off" 
                    // products={products} 
                    />
                </div>

            </div>

            <Divider />

        </div>
    )
}

export default Home