import React from 'react'
import './Navbar.css'

const NavBar = () => {
  return (
    <div>
        <ul className='nav-container'>
            <li className='nav-elements'><a href="">Home</a></li>
            <li className='nav-elements'><a href="">Food Searched</a></li>
            <li className='nav-elements'><a href="/">Food Recipe search</a></li>
            <li className='nav-elements'><a href="">About</a></li>
        </ul>
    </div>
  )
}

export default NavBar
