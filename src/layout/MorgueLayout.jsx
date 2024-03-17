import React from 'react'
import { Outlet } from 'react-router-dom'
import DeathRegFooter from '../component/Footer/DeathRegFooter'
import MorgueNavBar from '../component/MorgueNavBar/morgueNavBar'

const MorgueLayout = () => {
  return (
    <div>
        <MorgueNavBar/>
        <Outlet/>
        <DeathRegFooter/>
    </div>
  )
}

export default MorgueLayout;