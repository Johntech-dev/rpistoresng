import {React, useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Header from './Header.jsx';

const Nav = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }
    const logo = (
      <div className=' w-28 h-28 hidden md:flex md:ml-8'>
        <Link to="/">
        <img src='Rpi.png' />
        </Link>
      </div>
    )
    const cart = (
      <div className='cart flex gap-1'>
      <Link className='flex' to="/cart"><h1>Cart</h1><img className='w-8 h-8' src='cart.png' /><p className='pb-[8px]'>0</p></Link>
      </div>
)
  return (
    <>
    <div className=' select-none flex justify-between items-center h-16 max-w-6xl mx-auto px-4 first-letter font-outfit text-[#18102b]'>
     {logo}
      <div className='mt-8 hidden md:flex flex-row'>
      <input className='border border-gray-400 rounded-md w-96 p-2 outline-none' type='text' placeholder='Search products, brands and categories' />
      <button className='border bg-blue-500 p-2 text-white  ml-2 rounded-md' type='button'>Search</button>
    </div>
      <div className='hidden md:flex'>
     <><Link className='hover:text-blue-500' to="/login">Login</Link><Link className='hover:text-blue-500' to="/register">Register</Link><Link className='hover:text-blue-500' to="/orderhistory">Order</Link></>
     {cart}
      </div>
        </div>  
        {/* <div className='cart flex gap-1 mt-7'>
        <Link className='flex' to="/cart"><h1 className='text-[15px]'>Cart</h1><img className=' w-7 h-7' src='cart.png' /><p className='pb-[8px]'>0</p></Link>
        </div> */}
        <div className='flex md:hidden'>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineMenu className='cursor-pointer' size={25} /> : <AiOutlineClose className='cursor-pointer' size={25} />}
      </div>
      <div className='mt-4 flex gap-2'>
      <input className='border border-gray-400 rounded-md md:w-96 w-52 text-[8px] font-extrabold p-2 outline-none' type='text' placeholder='Search products, brands and categories' />
      <button className='border bg-blue-500 p-1 text-white  text-[10px]  rounded-md' type='button'>Search</button>
    </div>
    {cart}
    </div>
      <div className={nav ? 'fixed right-0 top-0 w-[60%] h-full  mt-16 ease-in-out duration-500 md:hidden text-[#18102b] couraor' : 'fixed left-[-500px]'}>
        <ul className=''>
          {/* <li className='p-4'>Home</li>  */}
          <li><Link className='hover:text-blue-500' to="/">Home</Link></li>
          <li><Link className= 'hover:text-blue-500' to="/login">Login</Link></li>
          <li><Link className='hover:text-blue-500' to="/register">Register</Link></li>
          <li><Link className='hover:text-blue-500' to="/orderhistory">Order</Link></li>
      </ul>
      </div>
    </>
  )
}

export default Nav