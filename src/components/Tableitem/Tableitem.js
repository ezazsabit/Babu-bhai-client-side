import React from 'react';

const Tableitem = (props) => {
    console.log(props.packageItem);
    let {name, description, suppliername, price, quantity, picture } = props.packageItem;
    return (
        <div className='App'>
           
           <table >
           <tbody>
    <tr className=''>
      <th className='text-start w-25 d-inline mx-auto' scope="row">{name}</th>
       <td className=' w-50 text-start'>
       <td className='p-3'>Price: {price}</td>
       <td className='p-3'>Quantity: {quantity}</td>
       <td><p className='mx-5 my-auto btn btn-danger'>delete</p></td>
       </td>
    </tr>
    
  </tbody>
           </table>
           
        </div>
    );
};

export default Tableitem;