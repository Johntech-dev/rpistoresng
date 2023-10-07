import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <div>
            
        </div>
        <div>
            <div>
                <h1 className='text-blue-600'>Login</h1>
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
        </div>
        <button>Login with Google</button>
    </div>
  )
}

export default Login