import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
// import useFetch from '../../Custom Hook/useFetch';

const Inventory = () => {
    const navigate=useNavigate();
    const [deliver,setDeliver]=useState(0)
    const [stock,setStock]=useState(0);
    let n=0;
    const { id } = useParams();
  
        const [data, setData] = useState([]);
      
        useEffect(() => {
          fetch(`http://localhost:5000/inventory/${id}`)
            .then((res) => res.json())
            .then((data) => setData(data));
        }, [id,data]);
      
      
    // const [data] = useFetch(`http://localhost:5000/inventory/${id}`);
    // console.log(data);
    let {name, description, suppliername, price, quantity, picture } = data;
    const handleUpdate=()=>{
       
            let updateQuantity;
    
            if (quantity > 0) {
                quantity--;
                updateQuantity = { quantity };
                console.log(updateQuantity)
            }
            fetch(`http://localhost:5000/inventory/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateQuantity),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
    
    }
    const handleStockNo=event=>{
        const n=parseInt((event.target.value));
        setStock(n);
    }
    const handleStock=event=>{
        event.preventDefault();
        
         let updateQuantity;
    
            if (quantity >= 0) {
                // const n=parseInt((event.target.value));
                quantity=quantity+stock;
                updateQuantity = { quantity };
                // console.log(updateQuantity)
            }
            fetch(`http://localhost:5000/inventory/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateQuantity),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

    }

    return (
        <div class="row mb-3 border border-warning p-3 " >
            <div className='col-lg-5 col-12  '>
                <img src={picture} class=" img-fluid " alt="..." />
            </div>
            <div className='col-lg-7 col-12'>
                <h5 class="card-title">{name}</h5>
                <h3>Price:{price}</h3>
                <h4>Quantity:{quantity-deliver}</h4>
                <p><span className='text-warning'>Supplier Name:</span> {suppliername}</p>
                <p class="card-text">{description}</p>
                {/* <Button className='btn btn-warning' onClick={haldleUpdate}>Update</Button> */}
                <button type="button" onClick={handleUpdate}  className="btn btn-warning">Update</button>
           </div>
           <form onSubmit={handleStock} className="App mt-5" >
           <h3 className="text-warning ">Add Your Stock!</h3>
           <input onBlur={handleStockNo}  type='text' /><br></br>
           <button  type="submit"   className="btn btn-warning">Stock the item</button><br></br>
           <Link to='/manageitems' className=' btn btn-secondary mt-3 text-decoration-none text-dark '>Manage-Items</Link>
           </form>
        </div>
    );
};

export default Inventory;