import React from 'react'
import styles from './styles.module.scss'
import Categories from '../../../data/Category'
import { Link } from 'react-router-dom';
import { Checkbox } from 'antd';
import Brands from '../../../data/Brands';



const Filter = () => {
    return (
        <aside className={styles.filter__wrapp}>
            <h2 className={styles.filter__title}>Categories</h2>
            <ul className={styles.cat__list}>
                {
                    Categories.categories.map((category, index) => {
                        return <li className={styles.list__item} key={index}>
                            <Checkbox>{category.title}</Checkbox>
                            {/* <Link to={`/products/`} className={styles.link}></Link> */}
                        </li>
                    })
                }
            </ul>
            <h2 className={`${styles.filter__title} m-t-25`}>Brand</h2>
            <ul className={styles.cat__list}>
                {
                    Brands.brands.map((brand, index) => {
                        return <li className={styles.list__item} key={index}>
                            <Checkbox>{brand.title}</Checkbox>
                            {/* <Link to={`/products/`} className={styles.link}></Link> */}
                        </li>
                    })
                }
            </ul>
            <h2 className={`${styles.filter__title} m-t-25`}>Price</h2>
            <ul className={styles.cat__list}>
                <li className={styles.list__item}>
                    <Checkbox>Under $50</Checkbox>
                </li>
                <li className={styles.list__item}>
                    <Checkbox>$50 - $1,00</Checkbox>
                </li>
                <li className={styles.list__item}>
                    <Checkbox>$1,00 - $2,00</Checkbox>
                </li>
                <li className={styles.list__item}>
                    <Checkbox>$2,00 - $5,00</Checkbox>
                </li>
                <li className={styles.list__item}>
                    <Checkbox>Over $5,00</Checkbox>
                </li>
            </ul>
        </aside>
    )
}

export default Filter