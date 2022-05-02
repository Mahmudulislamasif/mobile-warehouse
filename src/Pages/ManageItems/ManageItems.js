import React from 'react';
import Item from '../Home/Item/Item';
import UseHook from '../Home/UseHook/UseHook';
import './ManageItems.css'
const ManageItems = () => {
    const [items,setItems]=UseHook([])
    const handleDelete=id=>{
        const proceed=window.confirm('Are you sure to delete items?')
        if(proceed)
        { 
            fetch(`http://localhost:5000/inventory/${id}`,
            {
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                const remaining=items.filter(item=>item._id!==id)
                setItems(remaining)
            })
        }
    }
    return (
        <div className='container'>
                 <h1>Items</h1>
                 <div className='row g-4'>
                 {
                      items.map(item=><div className='div-class' key={item._id}>
                          <h4>{item.name} <button className='delete-btn'  onClick={()=>handleDelete(item._id)}>X</button></h4>
                      </div>)
                 }
                 </div>
            
        </div>
    );
};

export default ManageItems;