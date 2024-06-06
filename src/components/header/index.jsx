import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import Search from '../search'
import { BsSuitHeart } from 'react-icons/bs'
import { SlUser } from 'react-icons/sl'

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

import { Menu } from 'antd';

const MegaMenu=()=>{
    return (
        <div className='mega__menu'>
            <Menu />
        </div>
    )
}

const items = [
    {
        label: 'Health & Beauty',
        key: 'health-beauty',
        // icon: <MailOutlined />,
    },
    {
        label: 'Electronics',
        key: 'electronics', 
        // disabled: true,
    },
    {
        label: 'Fashion',
        key: 'fashion',  
    },
    {
        label: 'Sports',
        key: 'sports',  
    },
    {
        label: 'Household Appliances',
        key: 'household-appliances',   
    },
];



const Header = () => {
    const [slug, setSlug] = useState('');

    const navigate = useNavigate();

    const onClick = (e) => {
        // console.log('click ', e);
        const category = setSlug(e.key);  
        navigate(`/products/`);
    };
    useEffect(() => {
    
    }, [])

    return (
        <>
            <nav className={styles.main__menubar}>
                <div className="container d-flex justify-between items-center relative">

                    <Link to="/" >
                        <img src="/src/assets/logo.svg" className={styles.logo} alt="logo" />
                    </Link>

                    <Search />

                    <div className="d-inline-flex items-center">
                        <Link to="/" className={styles.action__btn}>
                            <BsSuitHeart />
                        </Link>
                        <Link to="/wish-list" className={styles.action__btn}>
                            <img src="/src/assets/icons/shop-cart.svg" className={styles.cart__icon} alt="cart" />
                            <span className={styles.cart__count}>0</span>
                        </Link>
                        <div className="d-inline-flex items-center m-l-16">
                            <Link to={'/auth/login'} className={styles.user__icon}>
                                <SlUser />
                            </Link>
                            <div>
                                <Link to='/auth/login' className={styles.auth__link}>Log In</Link>
                                <Link to='/' className={`${styles.auth__link} ${styles.signup}`}>Sign Up</Link>
                            </div>
                        </div>

                    </div>

                </div>
            </nav>

            <nav className={styles.mega__menu}>
                <div className="container">
                    <Menu onClick={onClick} selectedKeys={[slug]} mode="horizontal" items={items} />
                </div>
            </nav>
        </>
    )
}

export default Header