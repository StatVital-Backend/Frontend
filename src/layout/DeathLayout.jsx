import React from 'react'
import { Outlet } from 'react-router-dom'
import DeathRegFooter from '../component/Footer/DeathRegFooter'
import HosDeathNavBar from '../component/DeathNavBar/HosDeathNavBar'

const DeathLayout = () => {
  return (
    <div>
        <HosDeathNavBar/>
        <Outlet/>
        <DeathRegFooter/>
    </div>
  )
}

export default DeathLayout;