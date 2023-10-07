import React, { useState } from 'react'
import {Link} from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
function Header() {
  const [toggle, setToggle] = useState(false);
const cart = (
        <div className='cart flex gap-1'>
        <Link className='flex' to="/cart"><h1>Cart</h1><img className='w-8 h-8' src='cart.png' /><p className='pb-[8px]'>0</p></Link>
        </div>
)
const logo = (
  <div className=' w-28 h-28 md:ml-8'>
    <Link to="/">
    <img src='Rpi.png' />
    </Link>
  </div>
)
  return (
    <header>
      <div  className='flex justify-between text-[20px] font-outfit font-medium '>
      <div className='flex md:hidden mr-2 p-[28px] h-6'>
      <div>
        <div className='mt-4 flex gap-2'>
      <input className='border border-gray-400 rounded-md md:w-96 w-52 text-[8px] font-extrabold p-2 outline-none' type='text' placeholder='Search products, brands and categories' />
      <button className='border bg-blue-500 p-1 text-white  text-[10px]  rounded-md' type='button'>Search</button>
    </div>
        </div>  
        <div className='cart flex gap-1 mt-7'>
        <Link className='flex' to="/cart"><h1 className='text-[15px]'>Cart</h1><img className=' w-7 h-7' src='cart.png' /><p className='pb-[8px]'>0</p></Link>
        </div>
      {!toggle?
            <AiOutlineMenu className='mt-11' onClick={()=>setToggle(true)} />
                 :
            <AiOutlineClose className='mt-11' onClick={()=>setToggle(false)} /> 
              }
              {toggle?
                  <div className='flex flex-col ml-16 left-0 top-0 w-[25%] bg-white mt-16'>
                 <><Link className= 'hover:text-blue-500' to="/login">Login</Link><Link className='hover:text-blue-500' to="/register">Register</Link><Link className='hover:text-blue-500' to="/orderhistory">Order</Link></>
                 </div>
              :null}
               </div>
               </div>
      <div className=' hidden justify-between md:flex flex-row'>  
        {logo}
        <div>
        <div className='mt-8'>
      <input className='border border-gray-400 rounded-md w-96 p-2 outline-none' type='text' placeholder='Search products, brands and categories' />
      <button className='border bg-blue-500 p-2 text-white  ml-2 rounded-md' type='button'>Search</button>
    </div>
        </div>
        <nav>
        <div className=' mt-11 mr-8'>
          <div className='flex gap-5  flex-row'>
          <><Link className='hover:text-blue-500 gap-5' to="/login">Login</Link><Link className='hover:text-blue-500' to="/register">Register</Link><Link className='hover:text-blue-500' to="/orderhistory">Order</Link></>
        {cart}
        </div>
        </div>
        </nav>
        {/* <div>
          {cart}
          {search}
        </div> */}
        </div>
   </header>
  )
}
export default Header;