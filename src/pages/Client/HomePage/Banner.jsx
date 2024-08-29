import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

const Banner = () => {
  return (
    <div>
        <Carousel
        showArrows='true' autoPlay='true'
         infiniteLoop='true' showThumbs={false} showIndicators={false}>
            <div>
                <img className='h-128'
                 src="src/assets/images/banner/banner1.webp" alt="banner1" />
            </div>
            <div>
                <img className='h-128'
                 src="src/assets/images/banner/banner2.webp" alt="banner1" />
            </div>
        </Carousel>
    </div>
  )
}

export default Banner