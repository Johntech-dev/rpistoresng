import {React, useEffect, useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUserCircle } from 'react-icons/fa';

function Header  () {
    const [nav, setNav] = useState(false)
    const [displayName, setdisplayName] = useState("");
    const handleNav = () =>{
        setNav(!nav)
    }

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
          if (user) {
            const uid = user.uid;
      console.log(user.displayName)
      setdisplayName(user.displayName)
          } else {
          setdisplayName("")
          }
        });
  }, [])
    const auth = getAuth();
    const logo = (
      <div className=' w-28 h-28 md:mt-4 md:flex md:ml-8'>
        <Link to="/">
        <img src='Rpi.png' />
        </Link>
      </div>
    )
    const cart = (
      <div className=' hidden md:flex gap-1'>
      <Link className='flex' to="/cart"><h1>Cart</h1><img className='w-8 h-8 ' src='cart.png' /><p className='pb-[8px]'>0</p></Link>
      </div>
) 
const mobilecart = (
  <div className=' flex md:hidden gap-1'>
      <Link className='flex' to="/cart"><h1>Cart</h1><img className='w-8 h-8 ' src='cart.png' /><p className='pb-[8px]'>0</p></Link>
      </div>
)
const search = (
  <div className='md:mt-8  ml-6 gap-2 hidden  md:flex flex-row'>
  <input className='border border-gray-400 rounded-md w-96 p-2 outline-none' type='text' placeholder='Search products, brands and categories' />
  <button className='border bg-blue-500 p-2 text-white  ml-2 rounded-md' type='button'>Search</button>
</div>
)
const mobilesearch = (
  <div className=' mt-10 ml-6 flex flex-row gap-2 mr-2  md:hidden'>
  <input className='border border-gray-400 rounded-md w-96 p-2 outline-none' type='text' placeholder='Search products, brands and categories' />
  <button className='border bg-blue-500 p-2 text-white  ml-2 rounded-md' type='button'>Search</button>
  </div>
) 
const navigate = useNavigate()
const Logoutuser = (e) => {
  e.preventDefault();
  signOut(auth).then(() => {
    toast.success("Signout Successfully")
    navigate("/login")
  })
  // }).catch((error) => {
  //   toast.error("An error Occured")
  // });
  
}

  return (
    <>
    <ToastContainer />
    {/* mobile view */}
    <div className=' select-none flex justify-between items-center h-16 first-letter font-outfit text-[#18102b]'>
     {logo}
     <div className='flex gap-3 mr-4'>
     {mobilecart}
    <div onClick={handleNav} className=' mt-1 md:hidden'>
        {!nav ? <AiOutlineMenu className='cursor-pointer' size={25} /> : <AiOutlineClose className='cursor-pointer' size={25} />}
      </div>
      <div>
      {search}
      </div>
      </div>
      <div className='hidden md:flex gap-4 mr-5 md:mt-10'>
     <>
     <Link className='hover:text-blue-500' to="/login">Login</Link>
     <a className='flex flex-row items-center' href='#'>
      <FaUserCircle size={16} />
      Hi, {displayName}
     </a>
      <Link className='hover:text-blue-500' to="/register">Register</Link>
      <Link className='hover:text-blue-500' to="/orderhistory">Order</Link>
      <Link className='hover:text-blue-500' to="/Logout" onClick={Logoutuser}>Logout</Link>
      </>
     {cart}
      </div>
        </div> 
        <div>
          {mobilesearch}
          </div> 
        <div className='flex gap-10 md:hidden'>
    </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full  mt-16 ease-in-out duration-500 md:hidden text-[#18102b] couraor' : 'fixed left-[-500px]'}>
        <ul className=''>
          {/* <li className='p-4'>Home</li>  */}
          <li className='p-4 w-32'><Link className='hover:text-blue-500 ease-in-out' to="/">Home</Link></li>
          <li className='p-4'><Link className= 'hover:text-blue-500 ease-in-out' to="/login">Login</Link></li>
          <li className='p-4'><Link className='hover:text-blue-500 ease-in-out' to="/register">Register</Link></li>
          <li className='p-4'><Link className='hover:text-blue-500 ease-in-out' to="/orderhistory">Order</Link></li>
          <li className='p-4'><Link className='hover:text-blue-500 ease-in-out' to="/Logout" onClick={Logoutuser}></Link></li>
      </ul>
      </div>
    </>
  )
}

export default Header;