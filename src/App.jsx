import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import Recipe from './pages/recipe/Recipe'


// styles
import './App.css'

import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Navbar from './components/Navbar'
import ThemeSelector from './components/ThemeSelector'
import { useTheme } from './hooks/useTheme'

const App = () => {
  const { mode } = useTheme()
  return (
  <div className={`App ${mode}`}>
    <Navbar /> 
    <ThemeSelector />
      <Routes>       
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<Recipe/>} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} /> 
      </Routes>
    </div>     
  )
}

export default App
