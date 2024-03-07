import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer/Footer'
import NavBar2 from '../component/NavBar2/NavBar2'

const Layout2 = () => {
  return (
    <div>
        <NavBar2/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout2;