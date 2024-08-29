import React from 'react'
import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import ProductsHome from '../HomePage/ProductsHome'
import Filter from './Filter'

const ProductType = () => {
  return (
    <div>
      <Header/>
      <Filter/>
      <ProductsHome title=''/>
      <Footer/>
    </div>
  )
}

export default ProductType