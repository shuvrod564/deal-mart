import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import { Typography } from 'antd'
const { Title } = Typography;
import styles from './styles.module.scss';
import Products from '../../data/Products';
import ProductCard from '../productCard';

const NewArrivalsProducts = () => { 

    const houseProduct = Products.products.filter((product)=>{
        return product.category === 'household-appliances' 
    }) 

  return (
    <div className={styles.featured__wrapper}>
        <div className="container"> 
            <div className="d-flex items-center justify-between">
                <Title level={2} className='h2 m-b-0'>New Arrivals</Title> 
            </div> 
            <div className='divider'></div>
            <Swiper
                spaceBetween={10} 
                breakpoints={{ 
                    1400: {
                        slidesPerView:4,
                        spaceBetween: 20
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    540: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                }}
                autoplay={{ delay: 1000, disableOnInteraction: false, waitForTransition: false }} // Add autoplay prop here
                speed={2000} 
            >
                {
                    houseProduct.map((product,index)=>{
                        return (
                            <SwiperSlide key={index}>
                                <ProductCard product={product} /> 
                            </SwiperSlide>
                        ) 
                    })
                }
            </Swiper>
        </div>
    </div>
  )
}

export default NewArrivalsProducts