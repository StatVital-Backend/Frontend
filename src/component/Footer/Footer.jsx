import React from 'react'
import logo from '../../assets/statVitalLogo.jpeg'

const Footer = () => {
  return (
    <div className='text-3xl text-red-900'>
      <div>
      <img src={logo} alt="logo wa"/>
      <p class="text-xl">Large Text</p>

      {/* <p>StatVital</p> */}
      </div>
    </div>
  )
}

export default Footer