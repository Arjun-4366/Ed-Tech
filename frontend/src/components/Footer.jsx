import React from 'react'
import { useNavigate } from 'react-router-dom'

function Footer() {
    const navigate = useNavigate()
  return (
    <footer className='border-t-2'>
    <section className="flex flex-col bg-white pt-7 px-10">
      <div className="lg:flex  justify-between pb-8 px-8">
        <div className="lg:flex justify-between m-auto lg:w-full lg:px-0 px-3">
          <div className="">
          <div className='flex items-center'>
          <h1
            className='text-gray-600 text-2xl font-semibold  cursor-pointer'
            onClick={() => navigate('/')}
          >
            Bright<span className='text-green-500'>Minds</span>
          </h1>
        </div>
            <p className="cursor-pointer hover:underline mt-1">
              Terms & Conditions
            </p>
            <p className="cursor-pointer hover:underline mt-1">
              Privacy & Policy
            </p>
         
          </div>
          <div>
              <p className="text-black font-medium lg:mb-0 lg:mt-0 mt-6 uppercase">FOOTER</p>
              <p className="text-black mt-2 text-sm cursor-pointer hover:text-green-900 hover:underline">Footer 1</p>
              <p className="text-black mt-2 text-sm cursor-pointer hover:text-green-900 hover:underline">Footer 2</p>
              <p className="text-black mt-2 text-sm cursor-pointer hover:text-green-900 hover:underline">Footer 3</p>
          </div>
          <div>
              <p className="text-black font-medium lg:mb-0 lg:mt-0 mt-6 uppercase">FOOTER</p>
              <p className="text-black mt-2 text-sm cursor-pointer hover:text-green-900 hover:underline">Footer 1</p>
              <p className="text-black mt-2 text-sm cursor-pointer hover:text-green-900 hover:underline">Footer 2</p>
              <p className="text-black mt-2 text-sm cursor-pointer hover:text-green-900 hover:underline">Footer 3</p>
              <p className="text-black mt-2 text-sm cursor-pointer hover:text-green-900 hover:underline">Footer 4</p>
          </div>
          <div>
              <p className="text-black font-medium lg:mb-0 lg:mt-0 mt-6 uppercase">FOOTER</p>
              <p className="text-black mt-2 text-sm cursor-pointer hover:text-green-900 hover:underline">Footer 1</p>
              <p className="text-black mt-2 text-sm cursor-pointer hover:text-green-900 hover:underline">Footer 2</p>
              <p className="text-black mt-2 text-sm cursor-pointer hover:text-green-900 hover:underline">Footer 3</p>
              <p className="text-black mt-2 text-sm cursor-pointer hover:text-green-900 hover:underline">Footer 4</p>
              <p className="text-black mt-2 text-sm cursor-pointer hover:text-green-900 hover:underline">Footer 5</p>
          </div>
      
         
        </div>
      
      </div>
    
    </section>
  </footer>
  )
}

export default Footer
