import { useEffect, useState } from "react";

const useProducts=()=>{
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/inventory')
        .then(res=>{res.json()})
        .then(data=>setProducts(data))
    },[])
    console.log('hehe')
    console.log(products)
  
 return [products,setProducts];
 
}
export default useProducts;

 
