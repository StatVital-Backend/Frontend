import React from 'react'
import Features from './Features';
import Services from './Services';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import FAQs from './FAQs';
import Hero from './Hero';

const Home = () => {
  return (
    <>
    <Hero/>
    <Features/>
    <Services/>
    <AboutUs/>
    <ContactUs/>
    <FAQs/>
    </>
  )
}

export default Home;