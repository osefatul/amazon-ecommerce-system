import React from 'react'
import Carousel from 'react-material-ui-carousel'
import "./banner.css";

const data = [
    "https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61BvxKSpy3L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
]

// console.log(data);

const Banner = () => {
    return (
        <>
            <Carousel
                className="carasousel"
                autoPlay={true}
                animation="slide"
                indicators={false}
                // navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                infiniteLoop
                interval={3000}
                navButtonsProps={{
                    style: {
                        background: "#fff",
                        color: "#494949",
                        borderRadius: 0,
                        marginTop: -130,
                        height: "120px",
                    }
                }}
                >
                {
                    data.map((imag, i) => {
                        return (
                            <>
                                <img src={imag} alt="img" key={i} className="banner_img" />
                            </>
                        )
                    })
                }

            </Carousel>
        </>
    )
}

export default Banner;