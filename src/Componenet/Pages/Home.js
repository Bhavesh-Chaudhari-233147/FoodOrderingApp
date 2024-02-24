import React from 'react'
import BannerImage from "../../assests/food.jpeg"
import "../../Styles/Home.css"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className='headerContainer'>
          <h1>Food Corner</h1>
          <p>INDIAN FOOD AT A CLICK</p>
          <Link to="/menu">
            <button>
              ORDER NOW
            </button>
          </Link>
        </div>
    </div>
  )
}

export default Home