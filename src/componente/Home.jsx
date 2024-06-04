import React from 'react'
import Header from './sub-body/Header'
import Login from './sub-body/Login'
import HomePage from './sub-body/HomePage'
import About from './About'


const Home = () => {
  return (
    <div className='py-7 px-12'>
      <Header />
      <Login />
      {/* <About /> */}
      {/* <HomePage /> */}
    </div>
  )
}

export default Home
