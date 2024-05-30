import React from 'react'
import Header from './sub-body/Header'
import Login from './sub-body/Login'
import HomePage from './sub-body/HomePage'


const Home = () => {
  return (
    <div className='py-7 px-12'>
      <Header />
      <Login />
      {/* <HomePage /> */}
    </div>
  )
}

export default Home
