import React from 'react'
import { useNavigate } from 'react-router-dom'
function SuccessPage() {
  const navigate = useNavigate()
  return (
    <div className="flex items-center flex-col justify-center h-screen">
      <h1 className="text-green-500 text-3xl">Payment Successful!</h1>
      <button onClick={()=>navigate("/playVideo")} className='bg-green-500 p-2 rounded-lg mt-4 text-white'>Go to course</button>
    </div>
  )
}

export default SuccessPage
