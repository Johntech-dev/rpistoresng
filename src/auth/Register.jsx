import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  {createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from '../../src/firebase/config'

function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cPassword, setCPassword] = useState("")
  const navigate = useNavigate()
  
   const registerUser = (e) => {
    e.preventDefault(); // 'e' is defined as an argument here

    if (password !== cPassword) {
        toast.error("Passwords do not match");
    } else if (password.length < 8) {
      toast.error("Password must be 8 characters long")
    } else {
      toast.success("registration successful")
    }
   createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    toast.success("Registration successful ..")
    navigate("/login")
   })
   .catch((error) => {
    toast.error(error.message)
   })
 }
  return (
    <>
    <ToastContainer />
    <div className='flex flex-col md:flex-row gap-8 md:gap-28 justify-center items-center md:ml-56'>
    <div>
      <form onSubmit={registerUser}>
        <div>
            <h1 className='text-blue-600 text-center text-[40px] mt-8 mb-4'>Register</h1>
            <div className='flex flex-col gap-9'>   
            <input className='border border-gray-400 rounded-md w-72 md:w-96 text-[10px]  p-4 outline-none' type='text' placeholder='user@example.com' required value={email} onChange={(e) =>setEmail(e.target.value)} />
            <input  className='border border-gray-400 rounded-md w-72 md:w-96 text-[10px]  p-4 outline-none' type='password' placeholder='enter your password' required value={password} onChange={(e) => setPassword(e.target.value)} />
            <input  className='border border-gray-400 rounded-md w-72 md:w-96 text-[10px]  p-4 outline-none' type='password' placeholder='confirm your password' required value={cPassword} onChange={(e) => setCPassword(e.target.value)} />
            </div>
            <div className='mt-2 bg-white'>
            <button type='submit'className='bg-blue-600 p-1 w-full h-10 rounded-sm'>
                <h5 className='text-white'>Register</h5>
            </button>
            </div>
        </div>
        </form>
             <div className='flex text-center justify-center'>
             <p>Already have an acount?</p>
             <span><Link className='hover:text-blue-500' to="/login">Login</Link></span>
             </div>
    </div>
    <div>
        <img className='w-[500px] mt-16' src='rpilogin.png' />
    </div>
</div>
</>
  )
}

export default Register
