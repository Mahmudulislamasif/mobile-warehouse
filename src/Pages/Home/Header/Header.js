import React from 'react';
import image from '../Image/warehouse.jpg'
import './Header.css'
const Header = () => {
    return (
        <div className='container'>
           <div className='row g-4'>
              <div className='col-md-6 header-class'>
                   <div className=''>
                     <h5 className='heading-class'>Grocery Wirehouse</h5>
                     <h5 className='heading-class'>You Can Store Your Item Here</h5>
                     </div>
                   </div>
              <div className='col-md-6'>
                <img src={image} className='w-100'  alt=''/>
              </div>
           </div>
        </div>
    );
};

export default Header;