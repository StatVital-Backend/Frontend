import React from 'react'
import {Outlet } from 'react-router-dom'
import ServiceNavBar from '../component/ServiceNavBar/ServiceNavBar';
import ServiceFooter from '../component/Footer/ServiceFooter';

const ServiceLayout = () => {
  return (
    <div>
        <ServiceNavBar />
        <Outlet />
        <ServiceFooter />
    </div>

  )
}

export default ServiceLayout;