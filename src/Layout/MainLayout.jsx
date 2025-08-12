import React from 'react'
import Navbar from '../Components/Header/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
// className='mx-2 md:mx-4 lg:mx-6 bg-[#F8F5F4]'
function MainLayout() {
  return (
    <div className='bg-[#0D0518] min-h-screen'>
     <header >
        <Navbar/>
      </header>
      <Outlet></Outlet>
      <Footer></Footer>
      
    </div>
  )
}

export default MainLayout
