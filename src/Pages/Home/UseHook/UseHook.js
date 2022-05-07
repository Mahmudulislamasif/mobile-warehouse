import { useEffect, useState } from "react";

const UseHook = () => {
    const [items,setItems]=useState([]);
    
    useEffect(()=>{
        fetch('https://agile-brushlands-55517.herokuapp.com/inventory')
        .then(res=>res.json())
        .then(data=>setItems(data))
      },[])
      return[items,setItems]
};

export default UseHook;