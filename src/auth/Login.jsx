import React from 'react'
import { Link } from 'react-router-dom'
import FaGooglePlus from 'react-icons/fa'

const Login = () => {
  return (
    <div className='flex flex-col md:flex-row gap-8 md:gap-28 justify-center items-center'>
        <div>
            <img className='w-[500px] mt-16' src='rpilogin.png' />
        </div>
        <div>
            <div>
                <h1 className='text-blue-600 text-center text-[40px] mt-8 mb-4'>Login</h1>
                <div className='flex flex-col gap-9'>   
                <input className='border border-gray-400 rounded-md w-72 md:w-96 text-[10px]  p-4 outline-none' type='text' placeholder='user@example.com' />
                <input  className='border border-gray-400 rounded-md w-72 md:w-96 text-[10px]  p-4 outline-none' type='password' placeholder='enter your password' />
                </div>
                <div className='mt-10'>
                <button className='bg-blue-600 p-1 w-20 h-10 rounded-sm'>
                    <h5 className='text-white'>Login</h5>
                </button>
                </div>
            </div>
            <div>
                <Link to="/reset">Reset Password</Link>
            </div>
            <p>-- or --</p>
            <button className='border bg-orange-600 w-96 text-white p-2'>
                <FaGooglePlus />
                 Login with Google
                 </button>
        </div>
    </div>
  )
}

export default Login