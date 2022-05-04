import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import './AddItems.css'
const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const [user]=useAuthState(auth)
    const onSubmit = data => 
    {
        console.log(data);
        const url=`http://localhost:5000/inventory`
        fetch(url,{
            method:'POST',
            headers:
            {
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>
            {
                console.log(result)
            })
    };
  
   
    
    return (
        <div className='w-50 mx-auto add-form-class'>
            <h1>Add New Items Here</h1>
            <form className='d-flex flex-column add-form' onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Email' value={user.email} {...register("email")} readOnly />
                    <input placeholder='Product Name' {...register("name")} />
                    <textarea className='mb-2' placeholder='Description'  {...register("description")} />
                    <input placeholder='Price' type="number" {...register("price")} />
                    <input placeholder='Number' type="number" {...register("quantity")} />
                    <input placeholder='Supplier'  type="text" {...register("supplier")} />
                    <input placeholder='Photo URL'  type="text" {...register("image")} />
                    <input type="submit" value="Add Items" className=''/>
             </form>
        </div>
    );
};

export default AddItems;