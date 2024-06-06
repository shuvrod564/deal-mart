import React from 'react'
import styles from "./styles.module.scss"
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { title, rating, ratings, thumbnail, stock, price } = product;

    return (
        <div className={styles.product__card}>
            <Link to="/detail" className={styles.thumbnail__box}>
                <img src={thumbnail} className={styles.thumbnail} alt={title} />
            </Link>
            <Link to="/detail" className={styles.title}>{title}</Link>
            <div className={styles.stock}>
                Stock: <span className={`${styles.count} ${ stock === '0' && 'text-danger' } `}>{stock}</span>
            </div>
            <div className={styles.price}><span className={styles.from}>from</span> ${price}</div>
        </div>
    )
}

export default ProductCard