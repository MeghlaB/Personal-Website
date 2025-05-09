import { AlignJustify } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='header'>
      {/* logo */}
      <div> 
      <a href='#' className='logo'>Portfolio</a>
      </div>
      {/* humar icon */}
      <div>
        <AlignJustify />
      </div>
      {/* main-nav */}
      <nav className='navbar'>
       <div>
         <Link to={'/'}>Home</Link>
         <Link to={'/about'}>About</Link>
         <Link to={'/services'}>Services</Link>
         <Link to={'/portfiloo'}>Portfolio</Link>
         <Link to={'/contact'}>Contact</Link>
       </div>

      </nav>
    </div>
  )
}

export default Navbar
