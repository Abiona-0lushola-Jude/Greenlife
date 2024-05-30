import React from 'react'

const Login = () => {
  return (
    <div className='flex w-[100%] py-20'>
      <div className="w-1/2 p-20 flex flex-col">
        <h1 className="text-center text-emerald-900">Sign Up</h1>
        <label htmlFor="name">Your Name:</label>
        <input type="text" className="my-4 p-3 border rounded" placeholder='Enter your full name'/>
        <label htmlFor="name">Your Email Address:</label>
        <input type="text" className="my-4 p-3 border rounded" placeholder='Enter your email address'/>
        <label htmlFor="name">Phone Number: </label>
        <input type="text" className="my-4 p-3 border rounded" placeholder='Enter your phone number'/>

        <button className='my-10 py-4 bg-emerald-900 text-white rounded'>SUBMIT</button>
      </div>
      <div className="bg-emerald-900 flex justify-center items-center text-center w-1/2 rounded">
            <h1 className='text-white text-5xl px-10'>Welcome to the new testament of GreenLife</h1>
      </div>
    </div>
  )
}

export default Login
