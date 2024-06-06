import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import styles from './styles.module.scss'
import { Col, Pagination, Row } from 'antd'; 
import Products from '../../data/Products';
import ProductCard from './../../components/productCard/index';
import Filter from './filter';

 
const ProductLisiting = () => {
    const [current, setCurrent] = useState(3);

    const onChange  = (page) => {
        console.log(page);
        setCurrent(page);
    };
  return (
    <>
        <Helmet>
            <title>All Products | Deal Mart Online Shop</title>
            <meta name="description" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit est, eaque aliquam officia deleniti mollitia expedita cupiditate reiciendis, nostrum dolores placeat sint, possimus labore eveniet." />
        </Helmet>
        <div className={styles.product__listing__wrapper}>
            <div className="container">
                <Row gutter={[20, 12]}>
                    <Col lg={5}>
                        <Filter />
                    </Col>
                    <Col lg={19}>
                        <Row gutter={[12,12]}> 
                            {
                                Products.products.slice(0,12).map((product, index)=>{
                                    return <Col lg={6} key={index}>
                                        <ProductCard product={product} />
                                    </Col>
                                })
                            }
                        </Row>

                        <div className={styles.pagination}> 
                            <Pagination current={current} onChange={onChange} total={50} />         
                        </div>
                    </Col>
                </Row>



            </div>
        </div>
    </>
  )
}

export default ProductLisiting