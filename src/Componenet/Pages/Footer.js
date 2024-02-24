import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../../Styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className="socialMedia">
            <TwitterIcon/>
            <InstagramIcon/>
            <LinkedInIcon/>
        </div>
        <p>&copy; 2023 Indianfood.com.</p>
    </div>
  )
}

export default Footer