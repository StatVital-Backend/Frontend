import React from 'react'
import logo from '../../assets/WhatsApp Image 2024-02-29 at 1.38.37 PM.jpeg'
import FilledButton from '../../reuseables/bottons/FilledButton/FilledButton';
import OutlineButton from '../../reuseables/bottons/OutlineButton/OutlineButton';


const NavBar = () => {
  return (
    <div className='bg-blue-950 h-24 flex gap-20 mainContainer'>
            
            <div className='w-32 bg-blue-950 pr-10 pt-4'>
                <img src={logo} alt="web logo" />
            </div>
            <div className='flex justify-center gap-36 text-white pt-8 tag'>
               <p>Home</p> 
                <p>Features</p>
                <p >Services</p>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>FAQs</p>
            </div>

              <div className='flex gap-16 pt-8 btn'>
                <FilledButton text={"Log in"}/>
                <OutlineButton text={"Sign up"}/>
                
            </div>
        </div>
  );
}

export default NavBar;