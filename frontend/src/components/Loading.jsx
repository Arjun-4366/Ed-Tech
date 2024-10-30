import React from 'react'

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-green-600"></div>
  </div>
  )
}

export default Loading
