import React from 'react'
import Header from '../../../components/layout/Header'
import Banner from './Banner'
import Categrory from './Categrory'
import BestSeller from './BestSeller'
import ProductsHome from './ProductsHome'
import Footer from '../../../components/layout/Footer'

const HomePage = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <Categrory/>
        <BestSeller/>
        <ProductsHome/>
        <Footer/>
    </div>
  )
}

export default HomePage