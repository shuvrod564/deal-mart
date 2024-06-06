import React from 'react'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import styles from "./styles.scss"
 
 

const IntroProductCarousel = () => {
    var settingsHomeProduct = {
        dots: false, 
        autoplay: true,
        autoplaySpeed: 2000,
        loop: true,
        nav: true, 
        items: 1,
        margin: 0
    };

    

    return (
        <div className='container'>
         
            <OwlCarousel className={`hero__carousel owl-theme`} {...settingsHomeProduct}>
                <div> 
                    <img src="/src/assets/slider/slider-one.jpg" className={styles.banner} alt="slider image" />
                </div> 
                <div> 
                    <img src="/src/assets/slider/slider-two.jpg" className={styles.banner} alt="slider image" />
                </div> 
                <div> 
                    <img src="/src/assets/slider/slider-three.jpg" className={styles.banner} alt="slider image" />
                </div>  
            </OwlCarousel>
        </div>
    )
}

export default IntroProductCarousel