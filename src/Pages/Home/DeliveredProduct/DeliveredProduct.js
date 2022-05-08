import React from 'react';
import image1 from './Images/Oppo-K10-5G-Blue.jpg'
import image2 from './Images/Oppo-Find-N.jpg'
import image3 from './Images/Oppo-K9x-Blue.jpg'
import './DeliveredProduct.css'
const DeliveredProduct = () => {
    return (
        <div className='container body-class'>
            <div>
                <h1 className='mt-3'>Our Upcomming Product</h1>
                <div className='row'>
                  <div className='col-md-4'>
                     <img src={image1} alt=''/>
                     <h5>Oppo K-10 5G</h5>
                  </div>
                  <div className='col-md-4'>
                     <img src={image2} alt=''/>
                     <h5>Oppo Find-N</h5>
                  </div>
                  <div className='col-md-4'>
                     <img src={image3} alt=''/>
                     <h5>Oppo K-9x</h5>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveredProduct;