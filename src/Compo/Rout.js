import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import Event from './Event'
import Blog from './Blog'

const Rout = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/event' element={<Event />} />
        <Route path='/blogs' element={<Blog />} />
    </Routes>
    </>
  )
}

export default Rout