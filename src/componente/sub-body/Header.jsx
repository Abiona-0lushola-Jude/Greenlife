import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between'>
      <h1 className="text-3xl">Green<sup className='text-sm text-emerald-900'>Life</sup></h1>
      <div className="flex items-center gap-[3rem]">
        <h2 className="text-2xl">Home</h2>
        <h2 className="text-2xl">Contact</h2>
      </div>
    </div>
  )
}

export default Header
