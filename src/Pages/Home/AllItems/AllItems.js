import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import UseHook from '../UseHook/UseHook';

const AllItems = () => {
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

export default AllItems;