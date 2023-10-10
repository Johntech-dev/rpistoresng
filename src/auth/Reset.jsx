import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../firebase/config';

function Reset() {
    const [email, setEmail] = useState("")
    const resetPassword = (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
        .then(() => {
         toast.success("Check your mail for reset link")
        })
        .catch((error) => {
          toast.error(error.message)
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
                <h1 className='text-blue-600 text-center text-[40px] mt-8 mb-4'>Reset password</h1>
                <form onSubmit={resetPassword}>
                <div className='flex flex-col gap-9'>   
                <input className='border border-gray-400 rounded-md w-72 md:w-96 text-[10px]  p-4 outline-none' type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='mt-4 bg-white'>
                <button type='submit' className='bg-blue-600 w-full p-1 h-10 rounded-sm'>
                    <h5 className='text-white'>Reset Password</h5>
                </button>
                </div>
                </form>
            </div>
             <div className='flex flex-row gap-[280px] mt-4'>
                <Link className='hover:text-blue-500' to="/login">Login</Link>
                <Link className='hover:text-blue-500' to="/register">Register</Link>
             </div>
        </div>
    </div>
    </>
  )
}

export default Reset;