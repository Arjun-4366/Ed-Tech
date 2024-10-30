import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FaBars } from 'react-icons/fa';

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className='bg-white fixed top-0 left-0 w-full border-b-2  z-50'>
      <div className={`container mx-auto flex justify-between items-center px-4 md:px-8 py-2 ${navOpen ? 'flex flex-col  gap-4 ':'flex'}`}>
      
        <div className={`flex items-center `}>
          <h1
            className='text-gray-600 text-2xl font-semibold   cursor-pointer'
            onClick={() => navigate('/')}
          >
            Bright<span className='text-green-500'>Minds</span>
          </h1>
        </div>

       <div className='flex items-center flex-col'>
       <button
          className='lg:hidden text-gray-600 text-2xl'
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <MdClose /> : <FaBars />}
        </button>

        
        <div className={`lg:flex lg:items-center lg:space-x-8 ${navOpen ? 'flex flex-col space-y-4' : 'hidden'} lg:space-y-0 lg:flex-row`}>
          <ul className='flex flex-col lg:flex-row lg:space-x-8 w-full lg:w-auto'>
         
            <li
              className='text-black hover:text-blue-600 px-4 py-2 rounded-lg cursor-pointer'
              onClick={() => navigate('/about')}
            >
              About
            </li>
            <li
              className='text-black hover:text-blue-600 px-4 py-2 rounded-lg cursor-pointer'
              onClick={() => navigate('/contact')}
            >
              Contact
            </li>
            <li
              className='text-black hover:text-blue-600 px-4 py-2 rounded-lg cursor-pointer'
              onClick={() => navigate('/explore')}
            >
              Explore
            </li>
            <li className="py-2 flex items-center">
              <button
                className="bg-green-700 text-white rounded-lg px-4 py-1 flex items-center hover:bg-green-800 transition-all duration-500"
                onClick={() => navigate('/login')}
              >
                Sign In
              </button>
            </li>
          </ul>
        </div>
       </div>
        
      </div>
    </nav>
  );
}

export default Navbar;
