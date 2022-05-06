import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {useAuthState} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import UseHook from '../Home/UseHook/UseHook';
const MyItems = () => {
    const [user]=useAuthState(auth)
    const [myitems,setMyitems]=useState([])

    useEffect(()=>{
        const email=user.email;
        const url=`http://localhost:5000/myitem?email=${email}`
       
        fetch(url)
        .then(res=>res.json())
        .then(data=>setMyitems(data))
    
})
   
    return (
        <div>
            <h1>My Items</h1>
            {
                myitems?.map(item=><h1 key={item._id}>{item.name}:{item.email}</h1>)
            }
        </div>
    );
};

export default MyItems;