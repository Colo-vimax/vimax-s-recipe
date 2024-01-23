import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

// components
import Searchbar from './Searchbar'
// styles
import './Navbar.css'

const Navbar = () => {
  const { color, changeColor } = useTheme()

  return (
    <div className='navbar' style={{background : color}}>
      <nav onClick={() => changeColor('blue')}>
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
