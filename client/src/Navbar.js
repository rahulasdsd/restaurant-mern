
////////////////


import React from 'react'
//import logo from '../../assets/logo.png';
import './Navbar.css'
import HomePage from './Hoome';
function Navbar() {

  
  return (
    <nav className='nav'>
     
          <a href='/' className='site-title'>Protfolio</a>
          
            {/* <div className="logo-img">
              <img src={logo} alt='logo'/>
              
            </div> */}
            
              <ul>
              <li>
                    <a href="/Home">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/projects">Projects</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
              </ul>
            

     

    </nav>
  )
}

export default Navbar;

