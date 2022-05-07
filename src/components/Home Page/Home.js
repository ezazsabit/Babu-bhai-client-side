import React from 'react';

import './Home.css'
import Banner from './Carousel/Banner';

import Connection from './Connection/Connection';
import Products from '../Home Page/Products/Products'
import Achievement from './Achievement/Achievement';

const Home = () => {
    return (
        <div className='home'>
          
            
            <p className='headsentence'>check our products in stock</p>
      
            <div className='mt-3'>
            <Banner ></Banner>
            </div>
            <Products></Products>
            <Connection></Connection>
            <Achievement></Achievement>
            
        </div>
    );
};

export default Home;