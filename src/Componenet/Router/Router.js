import React from 'react'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Navbar from '../Navbr/Navbar'
import Footer from '../Pages/Footer'
import Menu from '../Pages/Menu'
import About from '../Pages/About'
import Contact from '../Pages/Contact'

function Router() {
  return (
        <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path='/menu' element={<Menu/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                </Routes>
            <Footer/>    
        </BrowserRouter>
  )
}

export default Router