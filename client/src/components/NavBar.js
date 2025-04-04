import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
function NavBar() {
    return (
      <nav className='nav'>
        <a href='/' className='site-title'>Hotel</a>
        <ul >
          <li>
            <Link to="/" >Home</Link>
          </li><li>
            <Link to="/HotelMenu" >Menu</Link>
          </li>
          <li>
            <Link to="/contact" >Contact</Link>
          </li>
          
        </ul>
      </nav>
    );
  }
  export default NavBar;  