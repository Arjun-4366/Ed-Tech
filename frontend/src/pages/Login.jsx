

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  useEffect(()=>{
    window.scroll(0,0)
  },[])
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center min-h-screen h-3/6 p-10 ">
    <div
      className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 "
    >
    
    <div className="flex flex-col justify-center md:p-14">
        <span className="mb-3 text-4xl font-bold text-gr">Welcome back</span>
        <span className="font-light text-gray-400 mb-8">
          Welcom back! Please enter your details
        </span>
        <div className="mt-2">
          <span className="mb-2 text-md">Email</span>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            name="email"
            id="email"
          />
        </div>
        <div className='mb-2'>
          <span className="mb-2 text-md">Password</span>
          <input
            type="password"
            name="pass"
            id="pass"
            className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
          />
        </div>
        <div className="flex justify-between w-full mb-2">
          
          <span className="font-bold text-md  cursor-pointer hover:underline">Forgot password</span>
        </div>
        <button
          className="w-full bg-green-500 text-white p-2 rounded-lg  hover:bg-green-700 "
        >
          Sign in
        </button>
   
        <div className="text-center text-gray-400 mt-1">
          Dont'have an account?
          <span className="font-bold text-black cursor-pointer hover:underline" onClick={()=>navigate('/register')}> Sign up for free</span>
        </div>
      </div>
    
      <div className="relative">
        <img
          src="/login.avif"
          alt="img"
          className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
        />
 
      
      </div>
    </div>

  </div>
  );
}

export default Login;