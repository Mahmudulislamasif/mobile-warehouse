import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light navbar-class">
                <div className="container-fluid">
                    <Link className='link-class' to='/home' >Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className='link-class' to='/home'>Home</Link>
                        <Link className='link-class' to='/blogs'>Blogs</Link> 
                    </div>
                    </div>
                </div>
                </nav>
        </div>
    );
};

export default Navbar;