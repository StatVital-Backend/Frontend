import React from 'react'

import logo from '../../assets/statVitalLogo.png'
import FilledButton from '../../reuseables/bottons/FilledButton/FilledButton';
import OutlineButton from '../../reuseables/bottons/OutlineButton/OutlineButton';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className='bg-blue-950 h-24 flex gap-80 mainContainer'>
            
            <div className='w-32 bg-blue-950 pr-2.5'>
                <img src={logo} alt="web logo" style={{ width: '250px', height: 'auto' }}/>
            </div>
              <div className='flex gap-96'>

              <div className='flex items-center hover:scale-110 transition duration-500 pt-4 cursor-pointer object-cover justify-center center gap-20 hover:text-blue-400 text-white pl-20'>
                <Link to="/hero"><p>Home</p> </Link> 
                <Link to="/features"><p>Features</p> </Link>  
                <Link to="/service"> <p >Services</p> </Link>
                <Link to="/aboutus"><p>About Us</p> </Link> 
                <Link to="/contactus"><p>Contact Us</p> </Link> 
                <Link to="/faqs"><p>FAQs</p> </Link>
              </div>

                <div className='flex gap-16  pt-5 btn'>
                  <Link to="/childregform"><FilledButton text={"Log in"} style={{width: '130px'}}/></Link>
                <Link to="/question"><OutlineButton text={"Sign up"} /></Link> 
              </div>
            </div>
        </div>
  );
}

export default NavBar;