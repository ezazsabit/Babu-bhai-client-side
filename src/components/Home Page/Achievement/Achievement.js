import React from 'react';
import A1 from '../../../All Images/awards/A1.jpg'
import A2 from '../../../All Images/awards/A2.jpg'
import A3 from '../../../All Images/awards/A3.png'

const Achievement = () => {
    return (
        <div className='App'>
            <h1 className='text-warning'>Our Achievement!!</h1>
           <div className="card-group">
  <div className="card">
    <img src={A1} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Green Award</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
     
    </div>
  </div>
  <div className="card">
    <img src={A2} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Bashundhora Award</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      
    </div>
  </div>
  <div className="card">
    <img src={A3} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Best Seller Award</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default Achievement;