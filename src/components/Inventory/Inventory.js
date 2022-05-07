import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../Custom Hook/useFetch';

const Inventory = () => {
    const { id } = useParams();
    // console.log(id);
    const [data] = useFetch(`http://localhost:5000/inventory/${id}`);
    // console.log(data);
    const {name, description, suppliername, price, quantity, picture } = data;
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
                {/* <Button className='btn btn-warning' onClick={()=>navigate(`/inventory/${_id}`)}>Update</Button> */}
        </div>
      </div >
    );
};

export default Inventory;