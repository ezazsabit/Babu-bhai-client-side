import React from 'react';
import './Additems.css'

const Additems = () => {
    return (
        <div className='addItem App'>
            <h1 className="text-warning">Add Item!!</h1>
            <form action="
            ">
            <input type="text" className='w-50'  placeholder='Product Name'/> <br></br>   
            <input type="number"  className='w-50' placeholder='Quantity'/>   <br></br>     
            <input type="number" className='w-50'  placeholder='Price'/>   <br></br>     
            <input type="text" className='w-50'  placeholder='Supplier Name'/>   <br></br>   
            <textarea name="" className='w-50'  placeholder='description' id="" cols="30" rows="10"></textarea>   <br></br>  
            <button  type="submit"   className="btn btn-warning">Add-Item</button><br></br> 
            </form>
        </div>
    );
};

export default Additems;