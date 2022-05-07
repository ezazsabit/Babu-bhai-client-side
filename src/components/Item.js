import React from 'react';
import './Item.css'
import img1 from '../All Images/inventories/img1.jpg';
import img2 from '../All Images/inventories/img2.png';
import img3 from '../All Images/inventories/img3.jpg';
import img4 from '../All Images/inventories/img4.jpg';
import img5 from '../All Images/inventories/img5.jpg';
import img6 from '../All Images/inventories/img6.jpg';
import img8 from '../All Images/inventories/img8.jpg';
import img7 from '../All Images/inventories/img7.jpeg';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Item = (props) => {
    console.log(props)
    const navigate=useNavigate()
    const {_id, name, description, suppliername, price, quantity, picture } = props.packageItem;
    console.log(picture);
    
    return (
        <div class="row mb-3 border border-warning p-3 " >
            <div className='col-lg-5 col-12  '>
                <img src={picture} class=" img-fluid " alt="..." />
            </div>
            <div className='col-lg-7 col-12'>
                <h5 class="card-title">{name}</h5>
                <h3>Price:{price}</h3>
                <h4>Quantity:{quantity}</h4>
                <p><span className='text-warning'>Supplier Name:</span> {suppliername}</p>
                <p class="card-text">{description}</p>
                <Button className='btn btn-warning' onClick={()=>navigate(`/inventory/${_id}`)}>Update</Button>
        </div>
      </div >
    );
};

export default Item;