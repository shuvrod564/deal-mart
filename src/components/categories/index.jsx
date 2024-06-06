import React from 'react'
import Category from "../../data/Category"
import { Col, Row } from 'antd' 
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

const Categories = () => {

  return (
    <div className={styles.category__wrapper}>
        <div className="container">
            <Row gutter={[8,8]}>
                {
                    Category.categories.map((item,index)=>{
                        const { title, thumbnail, slug } = item;
                        return <Col lg={4} md={6} sm={8} xs={12} key={index}>
                            <div className={styles.category__item}> 
                                <Link to={`/categories/${slug}`} className={styles.thumbnail__box}>
                                    <img src={thumbnail} alt={title} className={styles.thumbnail} />
                                </Link>
                                <Link to={`/categories/${slug}`} className={styles.title}>{title}</Link>
                            </div>
                        </Col>
                    })
                }
            </Row>
        </div>
    </div>
  )
}

export default Categories