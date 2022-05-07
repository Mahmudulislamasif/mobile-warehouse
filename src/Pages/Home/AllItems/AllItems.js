import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import UseHook from '../UseHook/UseHook';

const AllItems = () => {
    const [items]=UseHook([])
    return (
        <div className='container'>
            <h1>Inventory Items</h1>
           <div className='row g-4'>
           {
               
                items?.slice(0,6).map(item=><Item key={item._id} item={item}></Item>)
           }
           </div>
        </div>
    );
};

export default AllItems;