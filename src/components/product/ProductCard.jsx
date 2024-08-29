import React from 'react'

const ProductCard = () => {
  return (
    <div className='mr-10 last:mr-0'>
        <img src="src/assets/images/best_seller/bsl1.webp" alt="bsl1"
        className='w-48 h-60 rounded-3xl hover:scale-110 md:transform-none' />
        <p className='mt-3 hover:text-red-600'>Chân váy dài trơn công sở</p>
        <p className='mt-3 text-xl font-semibold'>209.000đ</p>
    </div>
  )
}

export default ProductCard