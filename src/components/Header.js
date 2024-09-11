import React from 'react';
import Logo from './Logo';
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className='h-16 shadow-md bg-white'>

      <div className='h-full container mx-auto flex items-center px-4 justify-between'>

        <div className='cursor-pointer'>
          <Link to='/'><Logo w={90} h={50}/></Link>
        </div>

        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-r-full focus-within:shadow-lg'>

          <input
            type='search'
            placeholder='Search items here?....'
            className='w-full pl-2 focus:outline-none' />
          
          <div className='text-lg bg-black text-white flex items-center justify-center rounded-r-full h-8 w-[40px] cursor-pointer'>
            <FaSearch/>
          </div>
        </div>

        <div className='flex items-center justify-between gap-4'>

          <div className='text-2xl relative'>

            <span><FaShoppingCart/></span>
            
            <div className='bg-red-700 text-white text-xs w-5 h-5 rounded-full flex justify-center items-center absolute -top-2 -right-3 cursor-pointer'>
              <p className='text-xs'>0</p>
            </div>

          </div>

          <div className='text-2xl cursor-pointer'>
            <FaUserCircle />
          </div>
          <div className='bg-green-950 rounded-full w-14 h-7 flex items-center justify-center hover:bg-green-900'>
            <Link to='/login' className='text-white text-sm font-semibold '>Login</Link>
          </div>
          
        </div>
    </div>
    </header>
  )
}

export default Header;
