import React from 'react'
import { useNavigate } from 'react-router-dom'

function buy() {
    const Navigate=useNavigate()
  return (
    <>
     <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Thanks for your purchase!</h1>
      <button onClick={ () =>Navigate('/')} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Go to Home
      </button>
    </div>
    </>
  )
}

export default buy
