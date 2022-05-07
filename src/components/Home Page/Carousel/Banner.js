import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../Carousel/image/banner1.jpg';
import banner2 from '../Carousel/image/banner2.jpg';
import banner3 from '../Carousel/image/banner3.jpg';

const Banner = () => {
    return (
      <div className='mb-5'>
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />
      
         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
          />
      
          
        </Carousel.Item>
      </Carousel>
        </div>
    );
};

export default Banner;