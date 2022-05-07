import React from 'react';
import AllItems from '../AllItems/AllItems';
import DeliveredProduct from '../DeliveredProduct/DeliveredProduct';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AllItems></AllItems>
            <Services></Services>
            <DeliveredProduct></DeliveredProduct>
        </div>
    );
};

export default Home;