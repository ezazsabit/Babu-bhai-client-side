import React from 'react';
import useFetch from '../../../Custom Hook/useFetch';
// import useProducts from '../../../Custom Hook/useProducts';
import Eachproduct from '../Products/Eachproduct';
import Item from '../../Item';

const Products = () => {
  const [data] = useFetch("http://localhost:5000/inventory");
  // console.log(data);
 
    return (
        <div >
          <h1 className=" App text-warning">Our products!!</h1>
          <div >
          {
            // eslint-disable-next-line array-callback-return
            
              data.slice(0,7).map(packageItem => <Item key={packageItem._id} packageItem={packageItem}/>
          )
          
          }
          
        </div>
                
             
            
          {/* <h2>{data.length} </h2>  */}
            
     </div>   
    );
};

export default Products;