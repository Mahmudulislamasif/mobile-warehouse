import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import AllItems from '../AllItems/AllItems';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AllItems></AllItems>
            <Footer></Footer>
        </div>
    );
};

export default Home;