
import React from 'react'
import { Link } from 'react-router-dom'
// styles
import './Navbar.css'
import Searchbar from './Searchbar'

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
        <Link to='/' className='brand'>
          <h1>vimax's recipe</h1>
        </Link>
        <Searchbar />
        <Link to='/create'>create recipe</Link>
      </nav>
      
    </div>
  )
}

export default Navbar
