import React from 'react'
import rectangle from '../../assets/Rectangle 778.png'
import dot2 from '../../assets/dfg 2 (1).png'
import dot1 from '../../assets/dfg 1.png'
import FilledButton from '../../reuseables/bottons/FilledButton/FilledButton'
import { Link } from "react-router-dom";
import OutlineButton from '../../reuseables/bottons/OutlineButton/OutlineButton'


const HosDeathNavBar = () => {
  return (
    <div className=''> 

      <div className='justify-between px-56 pt-10 flex  mainContainer'>
          <div className=' '>
              <h1 className='text-blue-400 text-3xl pt-5'>KINGS' COURT</h1>
          </div>
          <div className='pt-4 '>
              <div className="relative">
              <Link to="">
                  <input type="search" placeholder="search by.. ID/DOB/Name?" className="border border-blue-400 h-12 border-solid text-blue-950 rounded-3xl w-[600px] py-2 px-4 pl-6 placeholder-gray-900 placeholder-opacity-50 bg-transparent" />
                      <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 " xmlns="http://www.w3.org/2000/svg" width="20" height="20" >
                          <path fillRule="evenodd" d="M14.854 13.146a1 1 0 0 1-1.414 1.414l-3.792-3.792a1 1 0 0 1 1.414-1.414l3.792 3.792zM15.207 8a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" clipRule="evenodd" />
                      </svg>
              </Link>
              </div>
          
          </div> 
          <div className='flex gap-4 pt-5'>
          <Link to="/birthlayout/registerBirthAndAdd">
          <button className="rounded-full bg-blue-400 p-4 flex items-center justify-center">
            <span className="ml-2 text-[24px] text-bold text-white">+ Register Birth</span>
          </button> 
          </Link>
            <div className='text-3xl text-bold'>
              <Link to="/mortuarylogin"><OutlineButton text="Log Out" style={{width: "200px", height: "70px"}}/> </Link>
            </div>
          </div>

          {/* <div className=' pt-5'>
          <Link to="">
         
          </Link>
          </div> */}
      </div>  

      <div className=' justify-center pt-6 flex gap-4 mainContainer'>
          <div className=' pt- 20 addChild'>
          <Link to="/hospitalregisterDeath/registerdeath">
            <FilledButton text="Add " style={{width: "200px", height: 86}}/>
           </Link>

          </div>
          
          <div className=' pt- 20 addChild'>
          <Link to="/hospitalregisterDeath/Viewall">
            <FilledButton text="View All" style={{width: "200px", height: 86}}/>
            </Link>
          </div>

          <div className=' pt- 20 Search'>
          <Link to="/hospitalregisterDeath/search"> <FilledButton text="Search Deceased" style={{width: "200px", height: 86}}/>
          </Link>
          </div>

        </div>
        <h1 className='text-4xl justify-center center flex text-blue-950 '></h1>
        <div className='pt-6'>
        <div className="flex relative">
          <img src={rectangle} alt="Black Image" className="pl-[400px] w-[2000px] " />
          <p className='text-4xl z-10 text-white relative right-[750px] top-6'>Deceased Registration DashBoard</p>


        <div className='absolute justify-start top-2 left-[400px]'>
          <img src={dot1} alt="" className='' />
        </div >

        <div className='absolute top-2 right-[400px] '>
          <img src={dot2} alt="" />
        </div >
        </div>
      </div>
      <h2 className="text-4xl text-blue-950 font-semibold mb-4 pt-8 justify-center center flex uppercase">WELCOME TO KING'S MORTUARY</h2>

    </div>
        )
}

export default HosDeathNavBar;