import React, { useEffect, useState } from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
const MyItems = () => {
    const [user]=useAuthState(auth)
    const [items,setItems]=useState([])
    useEffect(()=>{
    const email=user.email;
    const url=`http://localhost:5000/inventory/${email}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setItems(data))
    },[user])
    return (
        <div>
            <h1>My Items</h1>
            {
                items.map(item=><h1 key={item._id}>{item.name}</h1>)
            }
        </div>
    );
};

export default MyItems;