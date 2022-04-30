import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const {id}=useParams()
    const [item,setItems]=useState({})
    useEffect(()=>{
        const url=`http://localhost:5000/inventory/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setItems(data))
    })
    return (
        <div className='container'>
            <div className='row'>
               <div className='col-md-6'>
               
                  <h3>Name: {item.name}</h3>
                 
            </div>
            </div>
        </div>
    );
};

export default ItemDetails;