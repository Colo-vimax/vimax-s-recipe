
import React from 'react'
import { Link } from 'react-router-dom'
// styles
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
        <Link to='/' className='brand'>
          <h1>vimax's recipe</h1>
        </Link>
        <Link to='/create'>create recipe</Link>
      </nav>
      
    </div>
  )
}

export default Navbar