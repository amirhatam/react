import React from 'react'
import Slider from "react-slick";

import slide_one from "../../assets/pics/s-1.jpg"
import slide_two from "../../assets/pics/s-2.jpg"
import slide_three from "../../assets/pics/s-3.jpg"
import slide_four from "../../assets/pics/s-4.jpg"

function Carrousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (

        <div>
            <Slider {...settings}>
            <div>
                <div className="carrousel_image" style={{background: `url(${slide_one})`, height:`${window.innerHeight}px` }} />
            </div>
            <div>
                <div className="carrousel_image" style={{background: `url(${slide_two})`, height:`${window.innerHeight}px` }} />
            </div>
            <div>
                <div className="carrousel_image" style={{background: `url(${slide_three})`, height:`${window.innerHeight}px` }} />
            </div>
            <div>
                <div className="carrousel_image" style={{background: `url(${slide_four})`, height:`${window.innerHeight}px` }} />
            </div>
            </Slider>
        </div>
    )
}

export default Carrousel
