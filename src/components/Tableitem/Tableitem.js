import React from 'react';
import './Tableitem.css'

const Tableitem = (props) => {
    // console.log(props.packageItem);
    let {_id,name, description, suppliername, price, quantity, picture } = props.packageItem;
    const handleDelete=(id)=>{
      console.log(id);
      const _id= {id};
      fetch(`http://localhost:5000/inventory`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(_id),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })

    }
    return (
        <div >
           
           <table className='table' >
           <tbody>
    <tr  >
      <th className='text-start w-25  border border-secondary' scope="row">{name}</th>
       <td className='w-50 tablehead text-start border border-secondary'>
       <td className='p-3'>Price: {price}</td>
       <td className='p-3'>Quantity: {quantity}</td>
       <td><p onClick={()=>handleDelete(_id)} className='mx-5 text-end my-auto btn btn-danger'>delete</p></td>
       </td>
    </tr>
    
  </tbody>
           </table>
           
        </div>
    );
};

export default Tableitem;