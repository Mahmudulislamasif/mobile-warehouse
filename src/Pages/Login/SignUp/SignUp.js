import React,{useState} from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'
const SignUp = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [errorMatch,setErrorMatch]=useState('')
    const navigate=useNavigate()
    const [createUserWithEmailAndPassword,user,loading,error,] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    // Take Input From User
    const handleEmail =(event)=>
    {
        setEmail(event.target.value)
    }
    const handlePassword=(event)=>
    {
      setPassword(event.target.value)
    }
    const handleConfirmPassword=(event)=>
    {
       setConfirmPassword(event.target.value)
    }
    if(user)
    {
        navigate('/home')

    }
    const signUpNewUser =(event)=>
    {
        event.preventDefault()
        if(confirmPassword!==password)
        { 
            setErrorMatch('Password and Confirm Password Not Match')
            return;
        }
        createUserWithEmailAndPassword(email, password)

    }
    return (
        <div className='login-form'>
        <h1>Register</h1>
        <form onSubmit={signUpNewUser}>
            <input onBlur={handleEmail}  type="email" name="email" placeholder="email" reqiured/>
            <input onBlur={handlePassword}   type="password" name="password" placeholder="password" required/>
            <input onBlur={handleConfirmPassword}  type="password" name="password" placeholder="Confirm Password" required/>
            {
                errorMatch? <p className='text-danger'>{errorMatch}</p>:
                <p className='text-danger'>{error?.message}</p>
            }
            <p>Already have an account? <Link className='auth-design' to='/login'>Login</Link></p>
            <button className='btn-class'>Register</button>
        </form>
        </div>
    );
};

export default SignUp;