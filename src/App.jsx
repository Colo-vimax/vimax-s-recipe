import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import Recipe from './pages/recipe/Recipe'
import create from './pages/create/Create'
import search from './pages/search/Search'

// styles
import './App.css'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <>
    <Navbar /> 
      <Routes>       
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<Recipe/>} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} /> 
      </Routes>
    </>     
  )
}

export default App
