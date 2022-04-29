import React,{ useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'
const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('');
    const navigate=useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    if(error)
    {
      errorElement=<p className='text-danger'>{error?.message}</p>
    }
    if (user) {
      navigate(from, { replace: true });
    }
    const handleEmail=(event)=>
    {
      setEmail(event.target.value)
    }
    const handlePassword=(event)=>
    {
      setPassword(event.target.value)
    }
    const handleLogIn=(event)=>
    {
      event.preventDefault();
      signInWithEmailAndPassword(email, password)
    }
    
    const resetPassword = async (email) => {
      if (email) {
          await sendPasswordResetEmail(email);
          toast('Sent email to Your Email');
      }
      else{
          toast('Please Enter Your Email');
      }
  }
    return (
        <div  className='login-form'>
         <h1>Login</h1>
        <form onSubmit={handleLogIn}>
            <input onBlur={handleEmail}  type="email" name="email" placeholder='email' required/>
            <input onBlur={handlePassword}  type="password" name="password" placeholder="password" required/>
            {errorElement}
            <button className='btn-class'>Login</button>
        </form>
            <p>New to here? <Link className='auth-design' to='/signUp'>Register</Link></p>
            <p>Forget Password? <button className='check-button' onClick={()=>resetPassword(email)}>Reset Password</button></p>
            <ToastContainer />
        </div>
    );
};

export default Login;