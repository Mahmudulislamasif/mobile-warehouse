import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ItemDetails.css'
const ItemDetails = () => {
    const {id}=useParams()
    const [item,setItems]=useState({})

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
           <div className='details-class mt-2'>
           <div className='row'>
                <div className='col-md-6'>
                    <img src={item.image} className='w-75' alt='' />
                </div>
               <div className='col-md-6'>
                 <div className='details-description-class' >
                   <h3>Name: {item.name}</h3>
                   <h3>Price: {item.price}</h3>
                   <h3>Quantity:{item.quantity}</h3>
                   <h4>Description:{item.description}</h4>
                   <h4>Supplier:{item.supplier}</h4>
                   <button onClick={increaseQuantity} className='delevered-btn mb-3'>Delevered</button>
                   <Link to='/manageitems' className='delevered-btn manage-link'>Manage Inventories</Link>
                 <form onSubmit={handleQuantity}>
                    <input type='number' name='name'/>
                    <input type='submit' value='Stoke' className='stoke-class'/>
                  </form>
                 </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default ItemDetails;