
import React from 'react'
import styles from './styles.module.scss';
import { Button, Col, Row, Flex } from 'antd';
import Products from '../../data/Products';

const WishList = () => {
  return (
    <div className={styles.wishlist__wrapper}>
        <div className="container">
          <h1>My Wishlists</h1>

          <Row gutter={[14,14]}>
            {
              Products.products.slice(0, 6).map((product, index) =>{
                return(
                  <Col lg={8} md={12} sm={12} xs={24}>
                    <div className={styles.product__box}>
                      <div className={styles.product__thumbnail}>
                        <img src={product.thumbnail} alt={product.title} />
                      </div>
                      <div className={styles.product__content}>
                        <h2 className={styles.product__title}>{product.title}</h2>
                        <div className={styles.product__price}>
                          <span className={styles.price}>${product.price}</span>
                        </div>
                        <Flex gap="small">
                          <Button type='primary' className={styles.btn}>Add to Cart</Button>
                          <Button danger className={styles.btn}>Remove</Button>
                        </Flex>
                      </div>
                    </div>
                  </Col>
                )
              })
            }
          </Row>


        </div>
    </div>
  )
}

export default WishList