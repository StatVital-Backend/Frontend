import React from 'react';
import laptop from '../../assets/Laptop.avif'
import streamLine from '../../assets/StreamLineDataMgt.png'
import efficiency from '../../assets/EfficiencProduct.svg'
import central from '../../assets/DecentralizeData.png'
import security from '../../assets/Security.png'


const Services = () => {
  return (
    <div className=' mainContainer mt-10'>
      <div className=''>
         
          <div className='justify-center font-bold center flex font-sans' >
            <p className='text-black text-5xl'>Explore Our Services</p>
          </div>       
        </div>
      

      <div className='flex justify-center center gap-40 pt-12 serviceDiv'>
        
        
        <div className=' allService'>
          <div className='flex gap-20 firstThreeDiv'>
            <div className='service1'>
              <img src={streamLine} alt="" />
              <div className="uppercase text-blue-400 font-bold text-2xl">Streamlined Data Management</div>
              <p className='hover:scale-110 transition text-xl duration-500 pt-4 cursor-pointer object-cover'>Our platform seamlessly 
                integrates into <br /> your existing workflows, streamlining the <br />
                 process of recording and managing birth <br /> and death data from
                  admission to final <br /> disposition.</p>

            </div>
            <div className='service2'>
              <img src={efficiency} alt="" />
              <div className="uppercase text-blue-400 text-2xl font-bold">Improved Efficiency and Productivity</div>
              <p className='hover:scale-110 transition text-xl duration-500 pt-4 cursor-pointer object-cover'>our system
              frees up valuable time for your staff to focus <br /> on providing quality
                care and services to patients and <br /> families, ultimately boosting 
                 productivity and satisfaction.</p>
            </div>

            <div className='service3'>
              <img src={central} alt="" />
              <div className="text-2xl uppercase text-blue-400 font-bold">Centralized and Accessible Data</div>
              <p className='hover:scale-110 transition text-xl duration-500 pt-4 cursor-pointer object-cover'>
               Our platform centralizes birth and death data <br /> in a secure digital repository, making it accessible <br />
               to authorized users whenever and wherever they <br /> need it. Whether you're retrieving records for <br />
               administrative purposes or conducting research, <br /> our system puts the information you need right <br />
               at your fingertips.</p>
            </div>

          </div>

          <div className='flex gap-36 pt-12 secondThreeDiv'>
            <div className='service4'>
              <img src={security} alt="" />
              <div className="text-2xl uppercase text-blue-400 font-bold">Data Security and Privacy</div>
              <p className='hover:scale-110 transition text-xl duration-500 pt-4 cursor-pointer object-cover'>StatVital employs state-of-the-art <br /> encryption  and security protocols <br /> to protect sensitive information
               from <br /> unauthorized access or disclosure,<br /> ensuring compliance with data <br /> protection regulations 
                and industry <br /> best practices.</p>
            </div>

            <div className='service5'>
              <img src={efficiency} alt="" />
              <div className="text-2xl uppercase text-blue-400 font-bold">Cost-Effectiveness</div>
              <p className='hover:scale-110 transition text-xl duration-500 pt-4 cursor-pointer object-cover'> Investing in our automated system is not <br /> just about improving efficiency; it's also <br /> about saving costs 
               in the long run. By <br /> reducing manual labor, minimizing errors,<br /> and optimizing workflows, our system delivers <br />
                a strong return on investment, allowing you <br /> to allocate resources more effectively and <br /> focus on what matters most</p>
            </div>

          </div>
       </div>

      </div>

      </div>
  )
}

export default Services;