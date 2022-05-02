import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const {id}=useParams()
    const [item,setItems]=useState({})
    const [quantity,setQunatity]=useState(0)
    // const updateQuatity=(quantity)=>
    // {
    //     const newQuantity=parseInt(quantity)+1;
    //     console.log(newQuantity)
    //     setQunatity(newQuantity)
    // }
    useEffect(()=>{
        const url=`http://localhost:5000/inventory/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setItems(data))
    })
    const handleQuantity =(event)=>
        {
              event.preventDefault();
              const quantity=parseFloat(event.target.name.value)+parseFloat(item.quantity);
              const updateQuatity={quantity}
              const url=`http://localhost:5000/inventory/${id}`
              fetch(url,
                {
                    method:'PUT',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(updateQuatity)
                })
                .then(res=>res.json)
                .then(data=>{
                    console.log(data)
                })
        };
        const increaseQuantity =(event)=>
        {
              event.preventDefault();
              const quantity=parseFloat(item.quantity)-1;
              const updateQuatity={quantity}
              const url=`http://localhost:5000/inventory/${id}`
              fetch(url,
                {
                    method:'PUT',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(updateQuatity)
                })
                .then(res=>res.json)
                .then(data=>{
                    console.log(data)
                })
        };

    return (
        <div className='container'>
            <div className='row'>
               <div className='col-md-6'>
                  <h3>Name: {item.name}</h3>
                  <h3>Quantity:{item.quantity}</h3>
                  <button onClick={increaseQuantity}>Delevered</button>
                <form onSubmit={handleQuantity}>
                  <input type='number' name='name'/>
                  <input type='submit' value='Stoke'/>
                </form>
            </div>
            </div>
        </div>
    );
};

export default ItemDetails;