import React from 'react'
import logo from '../../assets/WhatsApp Image 2024-02-29 at 1.38.37 PM.jpeg'
import FilledButton from '../../reuseables/bottons/FilledButton/FilledButton';
import OutlineButton from '../../reuseables/bottons/OutlineButton/OutlineButton';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className='bg-blue-950 h-24 flex gap-80 mainContainer'>
            
            <div className='w-32 bg-blue-950 pr-10'>
                <img src={logo} alt="web logo"/>
            </div>
            <div className='flex justify-center gap-20 text-white pt-8 tag'>
              <Link to="/hero"><p>Home</p> </Link> 
              <Link to="/features"><p>Features</p> </Link>  
              <Link to="/service"> <p >Services</p> </Link>
               <Link to="/aboutus"><p>About Us</p> </Link> 
               <Link to="/contactus"><p>Contact Us</p> </Link> 
               <Link to="/faqs"><p>FAQs</p> </Link>
            </div>

              <div className='flex gap-16 pt-8 btn'>
                <Link to="/login"><FilledButton text={"Log in"}/></Link>
               <Link to="./signup"><OutlineButton text={"Sign up"}/></Link> 
            </div>
        </div>
  );
}

export default NavBar;