import React, { useState } from 'react';
import AllItems from '../AllItems/AllItems';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <h1>This is home</h1>
            <Header></Header>
            <AllItems></AllItems>
        </div>
    );
};

export default Home;