import React from 'react';
import ProductCard from '../../../components/product/ProductCard';
import { Pagination, Stack } from '@mui/material';

const ProductsHome = (props) => {
  return (
    <div className='mx-20 mb-20'>
      <p className='text-center text-2xl font-medium'>{props.title}</p>

      <div className='flex justify-between mt-10'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className='flex justify-between mt-10'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className='flex justify-between mt-10'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className='flex justify-center mt-10'>
        <Stack spacing={2}>
          <Pagination count={10} variant='outlined' shape='rounded' />
        </Stack>
      </div>
    </div>
  );
};

export default ProductsHome;
