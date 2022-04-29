import React, { useState } from 'react';
import AllItems from '../AllItems/AllItems';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <AllItems></AllItems>
        </div>
    );
};

export default Home;