import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import UseHook from '../Home/UseHook/UseHook';
import './ManageItems.css'
import Spinner from '../Shared/Spinner/Spinner';
import { Link } from 'react-router-dom';
const ManageItems = () => {
    const [items,setItems]=UseHook([])
    if(items.length===0)
    {
        return <Spinner></Spinner>
    }
    let count=1;
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
                const remaining=items.filter(item=>item._id!==id)
                setItems(remaining)
            })
        }
    }
    return (
        <div className='container'>
                 <h1>Items</h1>
                 <div className='row g-4'>
                 <table className='table table-bordered'>
                 <thead>
                        <tr>
                            <th>SN</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Price</th>
                            <th scope='col'>Quantity</th>
                            <th scope='col'>Delete</th>
                       </tr>
                     </thead>
                     <tbody>
                         {
                             items.map((item)=><tr key={item._id}>
                                <td>{count++}</td>
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
                 <Link className='delevered-btn manage-link' to='/additems'>Add Items</Link>
            
        </div>
    );

};

export default ManageItems;