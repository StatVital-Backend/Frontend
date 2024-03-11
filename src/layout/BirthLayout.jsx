import React from 'react'
import {Outlet } from 'react-router-dom'
import Footer from '../component/Footer/Footer'
import BirthNavBar from '../component/BirthNavBar/BirthNavBar'

const BirthLayout = () => {
  return (
    <div>
        <BirthNavBar/>
        <Outlet />
        <Footer />
    </div>

  )
}

export default BirthLayout