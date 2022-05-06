import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import AllItems from '../AllItems/AllItems';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AllItems></AllItems>
            <Services></Services>
        </div>
    );
};

export default Home;