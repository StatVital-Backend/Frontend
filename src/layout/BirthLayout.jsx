import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer/Footer'

const BirthLayout = () => {
  return (
    <div>
        <BirthLayout/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default BirthLayout;