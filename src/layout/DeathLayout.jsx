import React from 'react'
import { Outlet } from 'react-router-dom'
import DeathNavBar from '../component/DeathNavBar/DeathNavBar'
import DeathRegFooter from '../component/Footer/DeathRegFooter'

const DeathLayout = () => {
  return (
    <div>
        <DeathNavBar />
        <Outlet/>
        <DeathRegFooter/>
    </div>
  )
}

export default DeathLayout;