import React from 'react';
import { useForm } from 'react-hook-form';

const AddItems = () => {
    const { register, handleSubmit } = useForm();
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
        <div className='w-50 mx-auto'>
            <h1>Add New Items Here</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Name' {...register("name")} />
                    <input placeholder='Description'  {...register("description")} />
                    <input placeholder='Price' type="number" {...register("price")} />
                    <input placeholder='Number' type="number" {...register("quantity")} />
                    <input placeholder='Supplier'  type="text" {...register("supplier")} />
                    <input placeholder='Photo URL'  type="text" {...register("image")} />
                    <input type="submit" value="Add Items" />
             </form>
        </div>
    );
};

export default AddItems;