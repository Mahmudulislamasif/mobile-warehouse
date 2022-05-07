import React, { useEffect, useState } from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
const MyItems = () => {
    const [user]=useAuthState(auth)
    const [myitems,setMyitems]=useState([])
    const [reload,setReload]=useState(false)

    useEffect(()=>{
        const email=user.email;
        const url=`http://localhost:5000/myitem?email=${email}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setMyitems(data))
    
})
   
    return (
        <div className='container'>
            <h1>My Items</h1>
            <div className='row'>
            <table className='table'>
               <thead>
                   <tr>
                       <th>Name</th>
                       <th>Price</th>
                   </tr>
               </thead>
               <tbody>
                   {
                       myitems.map(item=><tr key={item._id}>
                           <td>{item.name}</td>
                           <td>{item.price}</td>
                       </tr>)
                   }
               </tbody>
            </table>
            </div>
         
        </div>
    );
};

export default MyItems;