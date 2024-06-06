import React from 'react';
import styles from './styles.module.scss';
import { Helmet } from 'react-helmet';
import { Col, Row } from 'antd';

const ProductDetail = () => {
  return (
    <>
        <Helmet>
            <title>Product Detail Page</title>
        </Helmet>
        <div className={`${styles.detail__page__wrapper}`}>
            <div className="container">
                <Row gutter={[24,10]}>
                  <Col lg={12}>
                    <img src="/assets/products/71GFQfWO+DL._AC_SX679_.jpg" alt="img" />
                  </Col>
                  <Col lg={12}>
                    <h1>GreenLife 3-in-1 Breakfast Maker Station, Healthy Ceramic Nonstick Dual Griddles for Eggs Meat and Pancakes</h1>
                    <p className={styles.sku_detail}><span>Pip Code:</span> 3394624,  <span>SKU:</span> 5021265222575 </p>
                    <p className={styles.price}>
                      <span>$38</span>
                      <span className="p-l-4">$49.50</span>
                      <span>$40 with 20.00% vat</span>
                    </p>
                    <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime a autem blanditiis facere itaque beatae obcaecati perferendis qui velit cum. Eius vel reprehenderit soluta minus.</p>
                    <table className={styles.table}>
                      <tbody>
                        <tr>
                          <td>Special Feature</td>
                          <td>Manual</td>
                        </tr>
                        <tr>
                          <td>Color</td>
                          <td>White</td>
                        </tr>
                       	
                        <tr>
                          <td>Material</td>
                          <td>Ceramic</td>
                        </tr>
                        <tr>
                          <td>Brand</td>
                          <td>GreenLife</td>
                        </tr>
                        <tr>
                          <td>Brand</td>
                          <td>GreenLife</td>
                        </tr>
                        <tr>
                          <td>Product Dimensions</td>
                          <td>10"D x 10"W x 10"H</td>
                        </tr>
                        <tr>
                          <td>Wattage</td>
                          <td>1200 watts</td>
                        </tr> 
                      </tbody>
                    </table>
                  </Col>
                </Row>



            </div>
        </div>
    </>
  )
}

export default ProductDetail
