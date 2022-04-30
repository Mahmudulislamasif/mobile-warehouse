import { useEffect, useState } from "react";

const UseHook = () => {
    const [items,setItems]=useState([]);
  
    useEffect(()=>{
        fetch('http://localhost:5000/item')
        .then(res=>res.json())
        .then(data=>setItems(data))
      },[])
      return[items]
};

export default UseHook;