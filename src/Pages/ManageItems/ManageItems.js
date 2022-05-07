import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import UseHook from '../Home/UseHook/UseHook';
import './ManageItems.css'
const ManageItems = () => {
    const [items,setItems]=UseHook([])
    let count=1;
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
                const remaining=items.filter(item=>item._id!==id)
                setItems(remaining)
            })
        }
    }
    return (
        <div className='container'>
                 <h1>Items</h1>
                 <div className='row g-4'>
                 <table className='table'>
                 <thead>
                        <tr>
                            <th></th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Price</th>
                            <th scope='col'>Delete</th>
                       </tr>
                     </thead>
                     <tbody>
                         {
                             items.map((item)=><tr key={item._id}>
                                <td>{count++}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
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

export default ManageItems;