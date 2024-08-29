import React from 'react'
import ProductCard from '../../../components/product/ProductCard'
import CustomButton from '../../../components/ui/CustomButton'

const BestSeller = () => {
  return (
    <div className='m-20'>
        <p className='text-center text-2xl font-medium'>BEST SELLER</p>
        <div className='mt-10 flex justify-between'>
            <div className='w-1/2 relative'>
                <img src="src/assets/images/best_seller/best_seller.webp" alt="best_seller"
                className='w5/6 h-96 rounded-3xl ' />
                <CustomButton/>
            </div>
            <div className='flex justify-center w-1/2 ml-10'>
               <ProductCard/> 
               <ProductCard/> 
               <ProductCard/> 
            </div>
        </div>
    </div>
  )
}

export default BestSeller