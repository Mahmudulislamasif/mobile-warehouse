import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Services.css'
import {  faCartPlus, faCheckSquare, faStore, faTruck } from '@fortawesome/free-solid-svg-icons'
const Services = () => {
    return (
        <div className='container'>
            <h1 className='mt-3'>Services</h1>
            <div className='row'>
                <div className='col-md-3'>
                   <div className='service-class'>
                     <FontAwesomeIcon className='icon-new-class' icon={faCheckSquare}></FontAwesomeIcon>
                     <h5>Box</h5>
                   </div>
                </div>
                <div className='col-md-3'>
                   <div className='service-class'>
                     <FontAwesomeIcon className='icon-new-class' icon={faCartPlus}></FontAwesomeIcon>
                     <h5>Collect Items</h5>
                   </div>
                </div>
                <div className='col-md-3'>
                   <div className='service-class'>
                     <FontAwesomeIcon className='icon-new-class' icon={faStore}></FontAwesomeIcon>
                     <h5>Store</h5>
                   </div>
                </div>
                <div className='col-md-3'>
                   <div className='service-class'>
                     <FontAwesomeIcon className='icon-new-class' icon={faTruck}></FontAwesomeIcon>
                     <h5>Deliver</h5>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Services;