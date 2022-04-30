import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Item.css'
const Item = (props) => {
    const {_id,name,image,description,price}=props.item;
    const navigate=useNavigate();
    const navigateToItemsDetails=(id)=>{
      navigate(`/inventory/${id}`)
    }

    return (
        <div className='col-md-4 '>
             <div className='shadow-lg p-3 section-class'>
              <img className='w-75 image-class'  src={image} alt=''/>
              <div className='details-class mt-2'>
              <h5>{name}</h5>
              <p className='description-class'>{description}</p>
              <h6 className='mb-2'>Price:{price}tk</h6>
              <button className='check-button link-class-check' onClick={()=>navigateToItemsDetails(_id)}>Update</button>
              </div>
            </div>
        </div>
    );
};

export default Item;