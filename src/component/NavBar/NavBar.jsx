import React from 'react'
import FilledButton from '../../reuseables/bottons/FilledButton/FilledButton';
import OutlineButton from '../../reuseables/bottons/OutlineButton/OutlineButton';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className='bg-blue-950 h-24 flex justify-around mainContainer'>
            
            <div className='w-32 bg-blue-950'>
              <p className='text-3xl text-white pt-9 ml-20'>STATVITAL</p>
                {/* <img src={logo} alt="web logo" style={{ width: '250px', height: 'auto' }}/> */}
            </div>
              <div className='flex gap-96'>

              <div className='flex items-center hover:scale-110 transition duration-500 pt-4 cursor-pointer object-cover justify-center center gap-20 hover:text-blue-400 text-white pl-20'>
                <Link to="/hero"><p>Home</p></Link> 
                <Link to="/feature"><p>Features</p></Link>  
                <Link to="/serviceLayout/servicePage"><p >Services</p></Link>
                <Link to="/aboutus"><p>About</p></Link> 
                <Link to="/contactus"><p>Contact</p></Link> 
                <Link to="/faq"><p>FAQs</p></Link>
              </div>

                <div className='flex gap-16  pt-5 btn'>
                  <Link to="/hospitallogin"><FilledButton text={"LoginAs Hospital"} style={{width: '200px'}}/></Link>
                <Link to="/mortuarylogin"><OutlineButton text={"LoginAs Mortuary"} style={{width: '200px'}} /></Link> 
              </div>
            </div>
        </div>
  );
}

export default NavBar;