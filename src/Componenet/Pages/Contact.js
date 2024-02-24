import React from 'react'
import "../../Styles/Contact.css"
import ContactImage from "../../assests/fooda.jpeg"

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' 
            style={{backgroundImage: `url(${ContactImage})`}}> 
        </div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id='contact_form' method='post'>
                <label>Full Name</label>
                <input type='text' id='name' name='name' placeholder='Enter your name'/>
                <label>Email</label>
                <input type='text' id='email' name='email' placeholder='Emter Email'/>
                <label>Message</label>
                <textarea name='message' id='message' placeholder='Enter your message' rows="7"></textarea>
                <button type='submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact