import React, { useEffect, useState } from 'react';
import Tableitem from '../Tableitem/Tableitem';

const Manageitem = () => {
    
        const [data, setData] = useState([]);
            
        useEffect(() => {
          fetch(`http://localhost:5000/inventory`)
            .then((res) => res.json())
            .then((data) => setData(data));
        }, [data]);
      
    return (
        <div>
          <h1 className='App text-warning'>Manage inventory!!</h1>
          {/* <table className="table">
  <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
      <th scope="col">Handle</th>
    </tr>
  </thead> */}
  <div >
          {
            // eslint-disable-next-line array-callback-return
            
              data.map(packageItem => <Tableitem key={packageItem._id} packageItem={packageItem}/>
          )
          
          }
          
        </div>
  
{/* </table> */}
        </div>
    );
};

export default Manageitem;