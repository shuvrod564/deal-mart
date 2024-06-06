import { useState, Suspense } from 'react' 
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import MainLayout from './components/layouts/main'
import { ConfigProvider } from 'antd'
import Login from './components/layouts/auth/login'
import AuthLayout from './components/layouts/auth'
import ProductLisiting from './pages/productListing'
import CategoryFilterPage from './pages/categoryFilterPage'
import ProductDetail from './pages/productDetail'
import WishList from './pages/wishlist'

function App() { 

  return (
    <ConfigProvider
        theme={{
            token: {
                colorPrimary: '#0d2137'
            }
        }}
    >
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path='products' element={<ProductLisiting />} />
                    <Route path='products/{category}' element={<ProductLisiting />} />
                    <Route path='categories/:slug' element={<CategoryFilterPage />} />
                    <Route path='detail' element={<ProductDetail />} />
                    <Route path='wish-list' element={<WishList />} />
                </Route>
                <Route path='/auth' element={<AuthLayout/>}>
                    <Route path='login' element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
function Loading(){
    return <div>Loading ...</div>
}