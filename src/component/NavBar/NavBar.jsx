import React from 'react'
import logo from '../../assets/statVitalLogo.jpeg'


const NavBar = () => {
  return (
    <div className="mainContainer">

      <div className='flex'>
        <img className="w-16" src={logo} alt="logo wa"/>
      <p class="text-blue-500 text-2xl">statVital</p>
      </div>

      <div className='flex flex-row-reverse ...'>
          <p>Home</p>
          <p>Service</p>
          <p>Features</p>
          <p>FAQs</p>
          <p>About Us</p>
          <p>Contact Us</p>
      </div>

    </div>
  );
}

export default NavBar;