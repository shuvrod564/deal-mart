import React from 'react'
import styles from './styles.module.scss'
import { Helmet } from 'react-helmet'
import { Button, Checkbox, Col, Form,  Layout, Row, Typography } from 'antd'
import FloatInput from '../../../floatInput';
import { Link } from 'react-router-dom';
const {Content}=Layout;

const { Title } = Typography;

const Login = () => {
  return (
    <>  
        <Helmet>
            <title>Log In</title>
        </Helmet>
        <Content className={`${styles.content__box}`}>
            <Row gutter={[10,10]} align='middle'>
                <Col lg={10} md={24} sm={24} xs={24} className={`${styles.logo__col} d-flex justify-center items-cente`}>
                    <div className={`${styles.logo__box} d-flex justify-center items-center`}>
                        <img src="/src/assets/logo.svg" alt="logo" className={styles.logo} />
                    </div>
                </Col>
                <Col lg={14} md={24} sm={24} xs={24} className={styles.form__col}>
                    <Title level={2} className={`${styles.title} text-center text-primary`}>Deal Mart</Title>
                    <Title level={3} className={`${styles.desc} text-center text-primary`}>Welcome to Online Shopping Shop</Title>
                    <Form name='login_form'
                        size='large' 
                        layout='vertical'
                        className={styles.form__wrapp}
                    > 
                        <Form.Item name='email' className=''>
                            <FloatInput
                                label="Email"
                                placeholder="Email"
                                name="email"
                                bgClass="transparent login"
                            />
                        </Form.Item>
                        <Form.Item name='password' className=''>
                            <FloatInput
                                label="Password"
                                placeholder="Password"
                                name="password"
                                bgClass="transparent login"
                            />
                        </Form.Item> 
                        <Row gutter={[4,4]} align="middle">
                            <Col span={12}>
                                <Form.Item name='password' className='mb-0'>
                                    <Checkbox >Remeber Me</Checkbox>
                                </Form.Item> 
                            </Col>
                            <Col span={12} className='text-right'>
                                <Link to='/'>Forget Password ?</Link>
                            </Col>
                        </Row>
                        <Row gutter={[4,4]} align="middle" className='m-t-24'>
                            <Col span={12}>
                                <Button type='primary' size='large' className={styles.login__btn}>Login</Button>
                            </Col>
                            <Col span={12} className='text-right'>
                                <Button type='primary' ghost size='large' className={styles.signup__btn}>Sign Up</Button>
                            </Col>
                        </Row>
                        <Row gutter={[4,8]} align="middle" justify='center' className='m-t-24'>
                            <Col sm={12} xs={24}>
                                <div className={styles.or__text}>
                                    Or Login With 
                                </div>
                            </Col>
                            <Col sm={12} xs={15} className='text-right'>
                                <div className={`${styles.social__btns} d-flex justify-between`}> 
                                    <Button type='ghost' size='sm' className={styles.social__btn}>Google</Button>
                                    <Button type='ghost' size='sm' className={styles.social__btn}>Facebook</Button>
                                </div>
                            </Col>
                        </Row>
                    </Form> 
                </Col> 
            </Row>
        </Content>
    </>
  )
}

export default Login