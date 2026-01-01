import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import image from './Data/data';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './carousel.module.css';

const CarouselPage = () => {
  return (
    <div className={styles.carouselContainer}>
      <Carousel  
      autoPlay={true}
      showIndicators={false}
      infiniteLoop={true}
      showThumbs={false}
      >
        {
image.map((imageLink) =>{
  return <img src={imageLink} />
})
        }
      </Carousel>
    </div>
  )
}
export default CarouselPage;