import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './SocialLogin.css'
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate=useNavigate()
    let errorElement;
            if (error) {
                   errorElement= <p className='text-danger'>Error: {error?.message}</p>

            }
            if (loading) {
                return <p>Loading...</p>;
            }
            if (user) {
                navigate('/home')
            }
    return (
        <div>
            <div className='horizontal-line'>
                <div className='left-line'/>
                    <p>Or</p>
                <div className='right-line'/>
              </div>
            {errorElement}
            <button className='btn-class' onClick={()=>signInWithGoogle()}>SignIn with Google</button>
        </div>
    );
};

export default SocialLogin;