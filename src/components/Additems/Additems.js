import React from 'react';
import './Additems.css'

const Additems = () => {
    const addItemHandle=event=>{
        event.preventDefault();
        const name = event.target.name.value;
        // const email = event.target.email.value;
       const price ='$'+ event.target.price.value;
        const quantity = event.target.quantity.value;
        const suppliername = event.target.supplierName.value;
        const description = event.target.description.value;
        const picture= event.target.picture.value;
        const item = { name, price, quantity, suppliername, description, picture }
        console.log(item)
        fetch('http://localhost:5000/inventory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);

            })

        // fetch('http://localhost:5000/myitems', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(item),
        //     })
        //         .then(response => response.json())
        //         .then(data => {
        //             console.log('Success:', data);
    
        //         })    
        alert("New User added successfully")
        event.target.reset()
    
    }
    return (
        <div className='addItem App'>
            <h1 className="text-warning">Add Item!!</h1>
            <form onSubmit={addItemHandle} action="
            ">
            <input name='name' type="text" className='w-50'  placeholder='Product Name'/> <br></br>   
            <input name='quantity' type="number"  className='w-50' placeholder='Quantity'/>   <br></br>     
            <input name='price' type="number" className='w-50'  placeholder='Price'/>   <br></br>     
            <input name='supplierName' type="text" className='w-50'  placeholder='Supplier Name'/>   <br></br>   
            <input name='picture' type="text" className='w-50'  placeholder='Picture URL'/>   <br></br>   
            <textarea name="description" className='w-50'  placeholder='description' id="" cols="30" rows="10"></textarea>   <br></br>  
            <button  type="submit"   className="btn btn-warning w-25 my-3">Add-Item</button><br></br> 
            </form>
        </div>
    );
};

export default Additems;