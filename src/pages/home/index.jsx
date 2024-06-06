import { Button, Row, Layout, Col, Typography, Divider } from 'antd'
import React from 'react'
import { Helmet } from 'react-helmet'
import IntroProductCarousel from '../../components/introProductCarousel/index'; 

const { Title } = Typography;

import  styles from './styles.module.scss'
import { Link } from 'react-router-dom'; 
 
import Categories from './../../components/categories/index';
import Products from '../../data/Products';
import ProductCard from '../../components/productCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
const Home = () => {

    var settingsHomeProduct = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const houseProduct = Products.products.filter((product)=>{
        return product.category === 'household-appliances' 
    }) 
 
    const allProduct = Products.products.filter((product)=>{
        return product.category ==  'all'
    }) 

  return (
    <>
        <Helmet>
            <title>Deal Mart - A Online Shopping Platform</title>
        </Helmet>
        
        <IntroProductCarousel />
 
        <Categories />

        {/* Product Listing Start */}
        <div className={styles.featured__wrapper}>
            <div className="container">
                <Row gutter={[24,20]}>
                    <Col lg={6}>
                        <div className={styles.offer__box}>
                            <h2>Household</h2>
                            <p className='tt-uppercase text-white'>Days Offer</p>
                            <Button type='primary'>Shop Now</Button>
                            <Link to="/products" className='d-block m-t-20 text-center'>
                                <img src="/src/assets/products/featured-household-product.png" className={styles.thumbnail} alt="Product Image" />
                            </Link>
                        </div>
                    </Col>
                    <Col lg={18}>
                        <div className="d-flex items-center justify-between">
                            <Title level={2} className='h2 m-b-0'>Featured Household Items</Title> 
                        </div> 
                        <div className='divider'></div>
                        <Slider className={`product__carousel owl-theme `} {...settingsHomeProduct}>
                            {
                                houseProduct.map((product,index)=>{
                                    return <ProductCard key={index} product={product} /> 
                                })
                            }
                        </Slider>
                    </Col>
                </Row>
            </div>
        </div>
        {/* Product Listing End */}

        {/* Category Items Start */}
        <div className={styles.category_wrapper}>
            <div className="container">
                <Row gutter={[16,16]}>
                    <Col md={8} sm={12} xs={24}>
                        <Link to={'/'} className='d-block'>
                            <img src="/src/assets/categories/Monitor-Asus-24Gamer.jpg" className='w-full round' alt="category-banner" />
                        </Link>
                    </Col>
                    <Col md={8} sm={12} xs={24}>
                        <Link to={'/'} className='d-block'>
                            <img src="/src/assets/categories/sexualidade.jpg" className='w-full round' alt="category-banner" />
                        </Link>
                    </Col>
                    <Col md={8} sm={12} xs={24}>
                        <Link to={'/'} className='d-block'>
                            <img src="/src/assets/categories/Whirlpool.jpg" className='w-full round' alt="category-banner" />
                        </Link>
                    </Col>
                </Row>
            </div>
        </div>
        {/* Category Items End */}

        {/* Product Listing Start */}
        <div className={styles.featured__wrapper}>
            <div className="container"> 
                <div className="d-flex items-center justify-between">
                    <Title level={2} className='h2 m-b-0'>New Arrivals</Title> 
                </div> 
                <div className='divider'></div>
                <Slider className='product__carousel' {...settingsHomeProduct}>
                    {
                        houseProduct.map((product,index)=>{
                            return <ProductCard key={index} product={product} /> 
                        })
                    }
                </Slider>
            </div>
        </div>
        {/* Product Listing End */}

        {/* Best Selling Listing Start */}
        <div className={styles.featured__wrapper}>
            <div className="container"> 
                <div className="d-flex items-center justify-between">
                    <Title level={2} className='h2 m-b-0'>New Arrivals</Title> 
                </div> 
                <div className='divider'></div>
                <Row gutter={[10,10]}>
                    {
                        allProduct.map((product,index)=>{
                            return <Col lg={6} md={8} sm={12} xs={12} key={index}>
                                <ProductCard product={product} />
                            </Col> 
                        })
                    }
                </Row>
            </div>
        </div>
        {/* Best Selling Listing End */}

    </>
  )
}

export default Home
 