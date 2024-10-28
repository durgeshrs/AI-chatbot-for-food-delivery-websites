import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className='forklorelogofooter' src={assets.logo} alt="" />
            <p>Welcome to our site.</p>
            <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+91-9999-8888-22</li>
              <li>contact@forklore.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copyright'>Copyright 2024 © Forklore.com - All rights reserved.</p>
    </div>
  )
}

export default Footer