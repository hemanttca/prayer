import React from 'react'
import Header from './Compo/Header'
import Nav from './Compo/Nav'
import { BrowserRouter } from 'react-router-dom'
import Rout from './Compo/Rout'
import Footer from './Compo/Footer'



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Nav />
        <Rout />
        <Footer />
      </BrowserRouter>




    </>
  )
}

export default App