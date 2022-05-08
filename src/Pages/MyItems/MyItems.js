import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
const MyItems = () => {
    const [user]=useAuthState(auth)
    const [myitems,setMyitems]=useState([])
    const [reload,setReload]=useState(false)

    useEffect(()=>{
        const email=user.email;
        const url=`https://agile-brushlands-55517.herokuapp.com/myitem?email=${email}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setMyitems(data))
})

const handleDelete=id=>{
    const proceed=window.confirm('Are you sure to delete items?')
    if(proceed)
    { 
        fetch(`https://agile-brushlands-55517.herokuapp.com/inventory/${id}`,
        {
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            const remaining=myitems.filter(item=>item._id!==id)
            setMyitems(remaining)
        })
    }
}
    return (
        <div className='container'>
            <h1>My Items</h1>
            <div className='row'>
            <table className='table'>
               <thead>
                   <tr>
                       <th>Name</th>
                       <th>Price</th>
                       <th>Quantity</th>
                       <th>Delete</th>
                   </tr>
               </thead>
               <tbody>
                   {
                       myitems.map(item=><tr key={item._id}>
                           <td>{item.name}</td>
                           <td>{item.price}</td>
                           <td>{item.quantity}</td>
                           <td>
                                <button className='btn-delete' onClick={()=>handleDelete(item._id)}>
                                <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
                            </td>
                       </tr>)
                   }
               </tbody>
            </table>
            </div>
         
        </div>
    );
};

export default MyItems;