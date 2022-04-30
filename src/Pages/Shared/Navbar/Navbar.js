import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Navbar.css'
const Navbar = () => {
    const [user]=useAuthState(auth)
    const handleSignOut=()=>
    {
        signOut(auth)
    }
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
                    <div className='ms-auto'>
                    {
                        user && 
                        <>
                          <Link className='link-class' to='/manageitems'>Manage Items</Link>
                          <Link  className='link-class' to='/additems'>Add Item</Link>
                          <Link  className='link-class' to='/myitems'>My Items</Link>
                        </>
                    }
                    {
                       user? <Link className='link-class' onClick={handleSignOut} to='/login'>Signout</Link>:
                       <Link className='link-class' to='/login'>Login</Link>
                   }
                    </div>
                    </div>
                </div>
                </nav>
        </div>
    );
};

export default Navbar;