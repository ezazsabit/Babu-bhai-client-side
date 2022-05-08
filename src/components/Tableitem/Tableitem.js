import React from 'react';
import './Tableitem.css'

const Tableitem = (props) => {
    console.log(props.packageItem);
    let {name, description, suppliername, price, quantity, picture } = props.packageItem;
    return (
        <div >
           
           <table className='table' >
           <tbody>
    <tr  >
      <th className='text-start w-25  border border-secondary' scope="row">{name}</th>
       <td className='w-50 tablehead text-start border border-secondary'>
       <td className='p-3'>Price: {price}</td>
       <td className='p-3'>Quantity: {quantity}</td>
       <td><p className='mx-5 text-end my-auto btn btn-danger'>delete</p></td>
       </td>
    </tr>
    
  </tbody>
           </table>
           
        </div>
    );
};

export default Tableitem;