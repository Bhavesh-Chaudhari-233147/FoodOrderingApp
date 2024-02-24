import React from 'react'
import "../../Styles/Navbar.css"
import logo from "../../assests/logo.png"
import { Link } from 'react-router-dom'
import DvrIcon from '@mui/icons-material/Dvr';

function Navbar() {
  return (
        <div className='navbar'>
        <div className="leftSide">
          <img src={logo} alt='logoImage'/>
          <div className="hiddenLinks">
            <Link to="/">Home</Link>
            <Link to="/">Menu</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
          </div>
        </div>
        <div className="rightSide">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <button>
            <DvrIcon/>
          </button>
        </div>
    </div>
  )
}

export default Navbar