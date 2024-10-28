import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favorite food here</h2>
            <p>Select from a wide variety of mouthwatering dishes, all prepared with the highest quality ingredients, to satisfy your cravings and enhance your dining experience, one flavorful meal at a time.</p>
            <a href="#explore-menu"><button className='buttonwl'>View Menu</button></a>
        </div>
    </div>
  )
}

export default Header