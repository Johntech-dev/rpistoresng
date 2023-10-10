import React, { useState } from 'react'
import  { FaGoogle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import {  signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../firebase/config';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {  onAuthStateChanged } from 'firebase/auth';
const Login = () => {

    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const navigate = useNavigate()

    //  Login with google
    const provider = new GoogleAuthProvider();
    const SignInWithGoogle = (e) => {
        signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          toast.success("Login Succesfully")
          navigate("/")
        }).catch((error) => {
         toast.error("Error")
        });
    }
    const loginUser = (e) => {
      e.preventDefault();

      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    toast.success("Login successful")
    navigate("/")
  })
  .catch((error) => {
    toast.error("Account Not Found")
  });

    }
  return (
    <>
    <ToastContainer />
    <div className='flex flex-col md:flex-row gap-8 md:gap-28 justify-center items-center md:mr-28'>
        <div>
            <img className='w-[500px] mt-16' src='rpiregister.png' />
        </div>
        <div>
            <div>
                <form onSubmit={loginUser}>
                <h1 className='text-blue-600 text-center text-[40px] mt-8 mb-4'>Login</h1>
                <div className='flex flex-col gap-9'>   
                <input className='border border-gray-400 rounded-md w-72 md:w-96 text-[10px]  p-4 outline-none' type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input  className='border border-gray-400 rounded-md w-72 md:w-96 text-[10px]  p-4 outline-none' type='password' placeholder='enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='mt-2 bg-white'>
                <button type='submit' className='bg-blue-600 p-1 w-full h-10 rounded-sm'>
                    <h5 className='text-white'>Login</h5>
                </button>
                </div>
                </form>
            </div>
            <div className='mt-4'>
                <Link className='hover:text-blue-500' to="/reset">Forgot Password?</Link>
            </div>
            <p className='text-center'>-- or --</p>
            <button className='border flex flex-row gap-4 bg-orange-600 w-full items-center h-10 justify-center text-white' onClick={SignInWithGoogle}>
                <FaGoogle />
                 Login with Google
                 </button>
                 <div className='flex text-center justify-center mt-4 '>
                 <p>Don't have an acount?</p>
                 <span><Link className='hover:text-blue-500' to="/register">Register</Link></span>
                 </div>
        </div>
    </div>
    </>
  )
}

export default Login;