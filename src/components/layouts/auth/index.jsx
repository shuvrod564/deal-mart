import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './styles.module.scss'
import { Layout } from 'antd'

const AuthLayout = () => {
  return (
    <>
        <Layout className={styles.auth__layout}>
            <Outlet /> 
        </Layout>
    </>
  )
}

export default AuthLayout