import React from 'react';
import Item from '../Home/Item/Item';
import UseHook from '../Home/UseHook/UseHook';

const ManageItems = () => {
    const [items]=UseHook([])
    return (
        <div className='container'>
                 <h1>Items</h1>
                 <div className='row g-4'>
                 {
                      items.map(item=><Item key={item._id} item={item}></Item>)
                 }
                 </div>
            
        </div>
    );
};

export default ManageItems;