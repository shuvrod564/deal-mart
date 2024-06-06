import { Button, Checkbox, Col, Input, Row, Typography } from 'antd' 
import React from 'react'
const { Title } = Typography;
import styles from "./styles.module.scss"
import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
        {/* Newsletter Sart */}
        <div className={styles.newsletter__wrapp}>
            <div className="container"> 
                <div className={styles.content__box}> 
                    <Row gutter={[24,24]} align='middle'>
                        <Col lg={12} xs={24}>
                            <Title level={3} className={styles.news__title}>The savings newsletter has arrived</Title>
                            <Typography className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste officiis officia totam ipsum necessitatibus dolores quam quidem expedita tempora?</Typography>
                        </Col>
                        <Col lg={12} xs={24}>
                            <div className={styles.search__box}>
                                <Input size='large' placeholder="Enter Your Email" className={styles.input} /> 
                                <Button type='primary' className={styles.submit__btn}>Submit</Button>
                            </div>
                            <Checkbox>I read and accept the privacy policy*</Checkbox>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
        {/* Newsletter End */}

        {/* Footer Start */}
        <footer className={styles.footer}>
            <div className="container">
                <Row gutter={[12,12]}>
                    <Col lg={6} md={12} sm={12} xs={12}>
                        <Typography className={styles.title}>Deal Mart</Typography>
                        <ul className={styles.link__list}>
                            <li className={styles.list__item}><Link className={styles.link} to={'/'}>Home</Link></li>
                            <li className={styles.list__item}><Link className={styles.link} to={'/'}>About Us</Link></li>
                            <li className={styles.list__item}><Link className={styles.link} to={'/'}>Shop</Link></li>
                            <li className={styles.list__item}><Link className={styles.link} to={'/'}>Contact Us</Link></li>
                            <li className={styles.list__item}><Link className={styles.link} to={'/'}>Blog</Link></li>
                        </ul>
                    </Col>
                    <Col lg={6} md={12} sm={12} xs={12}>
                        <Typography className={styles.title}>legal information</Typography>
                        <ul className={styles.link__list}>
                            <li className={styles.list__item}><Link className={styles.link} to={'/'}>Terms of Use</Link></li>
                            <li className={styles.list__item}><Link className={styles.link} to={'/'}>Privacy Policy</Link></li>
                            <li className={styles.list__item}><Link className={styles.link} to={'/'}>Refund Policy</Link></li> 
                            <li className={styles.list__item}><Link className={styles.link} to={'/'}>Return Policy</Link></li> 
                            <li className={styles.list__item}><Link className={styles.link} to={'/'}>Replace Warranty</Link></li> 
                        </ul>
                    </Col>
                    <Col lg={6} md={12} sm={12} xs={12}>
                        <Typography className={styles.title}>Advertise your store</Typography>
                        <ul className={styles.link__list}>
                            <li className={styles.list__item}><Link className={styles.link} to={'/'}>Register your store</Link></li>
                            <li className={styles.list__item}><Link className={styles.link} to={'/'}>Reserved Area Marketplace</Link></li> 
                        </ul>
                    </Col>
                    <Col lg={6} md={12} sm={12} xs={12}>
                        <Typography className={styles.title}>Business with us</Typography>
                        <ul className={styles.link__list}>
                            <li className={styles.list__item}><Link className={styles.link} to={'/'}>Affiliate Program</Link></li>
                            <li className={styles.list__item}><Link className={styles.link} to={'/'}>Partnership</Link></li>
                            <li className={styles.list__item}><Link className={styles.link} to={'/'}>Office Map</Link></li>  
                        </ul> 
                    </Col>
                </Row>
            </div>
        </footer>
        {/* Footer End */}
    
    </>
  )
}

export default Footer