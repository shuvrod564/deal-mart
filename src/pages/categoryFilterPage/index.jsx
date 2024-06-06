import { Col, Row } from 'antd';
import React from 'react'
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import Products from '../../data/Products';
import ProductCard from '../../components/productCard';
import styles from './styles.module.scss'

const CategoryFilterPage = () => {
    const { slug } = useParams();
    const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);
    const cat_name = categoryName.replace('-', ' ');  

    const filterData = Products.products.filter((product) => {
        return product.category === slug;
    })
    

    return (
        <>
            <Helmet>
                <title>Category Wise Products</title>
            </Helmet>
            <div className="p-t-30 p-b-30">
                <div className="container">
                    <div className="m-b-24">{ cat_name }</div>
                    {
                        filterData == '' && <div className={styles.nodata__found}>No Products Available</div>
                    }
                    <Row gutter={[12, 12]}>
                        {
                            filterData.slice(0, 12).map((product, index) => {
                                return <Col lg={6} key={index}>
                                    <ProductCard product={product} />
                                </Col>
                            })
                        }
                    </Row>
                </div>
            </div>
        </>
    )
}

export default CategoryFilterPage