import React from 'react'
import Features from './Features';
import Services from './Services';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import FAQs from './FAQs';
import Hero from './Hero';
import RegisterBirth from './RegisterBirth';
import RegisterDeath from './RegisterDeath';

const Home = () => {
  return (
    <>
    <Hero/>
    <Features/>
    <Services/>
    <AboutUs/>
    <ContactUs/>
    <FAQs/>
    <RegisterBirth/>
    <RegisterDeath/>
    </>
  )
}

export default Home;