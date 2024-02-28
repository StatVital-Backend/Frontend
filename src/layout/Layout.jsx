import React from 'react'
import {Outlet } from 'react-router-dom'
import NavBar from '../component/NavBar/NavBar'
import Footer from '../component/Footer/Footer'

const Layout = () => {
  return (
    <div>
        <NavBar />
        <Outlet />
        <Footer />
    </div>

  )
}

export default Layout