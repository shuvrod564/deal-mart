import React from 'react' 
import Slider from 'react-slick';

import "./styles.scss"
  

const IntroProductCarousel = () => {
    var settingsHomeProduct = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    

    return (
        <div className='container'>
         
            <Slider className={`hero__carousel`} {...settingsHomeProduct}>
                <div> 
                    <img src="/assets/slider/slider-one.jpg" className="banner" alt="slider image" />
                </div> 
                <div> 
                    <img src="/assets/slider/slider-two.jpg" className="banner" alt="slider image" />
                </div> 
                <div> 
                    <img src="/assets/slider/slider-three.jpg" className="banner" alt="slider image" />
                </div>  
            </Slider>
        </div>
    )
}

export default IntroProductCarousel