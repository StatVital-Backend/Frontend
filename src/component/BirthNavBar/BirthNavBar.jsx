import React, { useState } from 'react'
import rectangle from '../../assets/Rectangle 778.png'
import dot2 from '../../assets/dfg 2 (1).png'
import dot1 from '../../assets/dfg 1.png'
import FilledButton from '../../reuseables/bottons/FilledButton/FilledButton'
import { Link } from "react-router-dom"
import OutlineButton from '../../reuseables/bottons/OutlineButton/OutlineButton'


const BirthNavBar = () => {
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [sex, setSex] = useState('')

  return (
    <div className=''> 
      <div className='justify-between px-56 pt-10 flex  mainContainer'>
          <div className=' '>
              <h1 className='text-blue-400 text-3xl text-bold pt-5'>KINGS' COURT</h1>
          </div>

          <div className='flex gap-5 pt-5'>
          <Link to="/hospitalregisterDeath/registerdeath">
          <button className="rounded-full bg-blue-400 p-4 flex items-center justify-center">
            <span className="ml-2 text-[24px] text-white">+ Register Death</span>
          </button> 
          </Link>
          <div className='text-2xl text-bold '>
              <Link to="/hospitallogin"><OutlineButton text="Log Out" style={{width: "200px", height: "70px"}}/> </Link>
            </div>
          </div>
      </div>  

      <div className=' justify-center pt-6 flex gap-4 mainContainer'>
          <div className=' pt- 20 addChild'>
           <Link to="/birthlayout/registerBirthAndAdd"><FilledButton text="Add" style={{width: "200px", height: 86}}/> </Link> 
          </div>

          <div className=' pt- 20 addChild'>
          <Link to="/birthlayout/viewAll"><FilledButton text="View All" style={{width: "200px", height: 86}}/> </Link>  
          </div>

          <div className=' pt- 20 AddChild'>
           <Link to="/birthlayout/update"><FilledButton text="Post Natal Update" style={{width: "200px", height: 86}}/> </Link> 
          </div>

          <div className=' pt- 20 AddChild'>
           <Link to="/birthlayout/search"><FilledButton text="Search" style={{width: "200px", height: 86}}/> </Link> 
          </div>

      </div>
      <h1 className='text-4xl justify-center center flex text-blue-950 '></h1>
      <div className='pt-6'>
      <div className="flex relative">
        <img src={rectangle} alt="Black Image" className="pl-[400px] w-[2000px] hidden sm:block" />
        
        <p className='text-4xl z-10 text-white relative right-[750px] top-6'>Birth Registration DashBoard</p>


        <div className='absolute justify-start top-2 left-[400px]'>
          <img src={dot1} alt="" className='hidden sm:block' />
        </div >

        <div className='absolute top-2 right-[400px] '>
          <img src={dot2} alt="" className='hidden sm:block' />
        </div >
        </div>
      </div>

    </div>
        )
}

export default BirthNavBar;