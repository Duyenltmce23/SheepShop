import React from 'react';
import Header from '../../../components/layout/Header';
import Banner from './Banner';
import Categrory from './Categrory';
import BestSeller from './BestSeller';
import ProductsHome from './ProductsHome';
import Footer from '../../../components/layout/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Categrory />
      <BestSeller title='Best Seller' />
      <BestSeller title='Sản phẩm mới nhất' />
      <ProductsHome title='Sản Phẩm' />
      <Footer />
    </div>
  );
};

export default HomePage;
