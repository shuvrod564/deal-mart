import { Input } from 'antd'
import React from 'react'
import { CiSearch } from 'react-icons/ci'
import styles from './styles.module.scss'

const heroSearch = () => {
  return (
    <>
        <Input size='large' placeholder="Search for product, brand, reference..." suffix={<CiSearch />} className={styles.search__box} /> 
    </>
  )
}

export default heroSearch