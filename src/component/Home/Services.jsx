import React from 'react';
import laptop from '../../assets/Laptop.avif'
import streamLine from '../../assets/StreamLineDataMgt.png'
import efficiency from '../../assets/EfficiencProduct.svg'
import central from '../../assets/DecentralizeData.png'
import security from '../../assets/Security.png'


const Services = () => {
  return (
    <div className=' mainContainer'>

      <div className= ''>
        <img className='relative opacity-3 h-[70vh] w-[100%]' src={laptop} alt='background'/>
        <div className='absolute text-center justify-center service top-60 left-[800px]'>
          {/* <p className='text-blue-400 font-bold font-sans text-5xl txt'>Our Services</p> */}
          {/* <p className='text-blue-400 font-normal text-2xl tet'>We Have Investmented In The Development And Management Of Such Innovative And Productive <br /> Solutions</p>       */}
        </div>
      </div>

      <div className='mt-10'>
          <div className='justify-center center flex font-bold font-sans'>
            <p className='text-blue-400 text-2xl'>EXPLORE OUR </p>
            </div>
          <div className='justify-center center flex font-sans' >
            <p className='text-black text-3xl'>SERVICE</p>
          </div>       
        </div>
      

      <div className='flex justify-center center gap-40 pt-12 pr-20 serviceDiv'>
        
        <div>
          
          <div className="pr-18 text-blue-400 font-bold text-3xl">Why StatVital ?</div>          
        <p className='hover:scale-110 transition text-xl duration-500 pt-4 cursor-pointer object-cover'> Trust is paramount when it comes to <br /> vital statistics.
         Our system employs <br /> advanced algorithms and validation <br />
        checks to ensure the accuracy and <br /> integrity of every record
        with regulatory requirements and standards.</p>
        </div>
        
        <div className='allService'>
          <div className='flex gap-20 firstThreeDiv'>
            <div className='service1'>
              <img src={streamLine} alt="" />
              <div className=" uppercase text-blue-400 font-bold text-2xl">Streamlined Data Management</div>
              <p className='hover:scale-110 transition text-xl duration-500 pt-4 cursor-pointer object-cover'>With our automated system, say goodbye <br /> to cumbersome 
               paperwork and manual data <br /> entry. Our platform seamlessly 
                integrates <br /> into your existing workflows, streamlining the <br />
                 process of recording and managing birth and death data from
                  admission to final disposition.</p>

            </div>
            <div className='service2'>
              <img src={efficiency} alt="" />
              <div className="uppercase text-blue-400 text-2xl font-bold">Improved Efficiency and Productivity</div>
              <p className='hover:scale-110 transition text-xl duration-500 pt-4 cursor-pointer object-cover'>Time is of the essence in healthcare and <br /> mortuary services. By
               automating repetitive <br /> tasks and optimizing workflows, our system <br />
              frees up valuable time for your staff to focus on <br /> providing quality
                care and services to patients and families, ultimately boosting 
                 productivity and satisfaction.</p>
            </div>

            <div className='service3'>
              <img src={central} alt="" />
              <div className="text-2xl uppercase text-blue-400 font-bold">Centralized and Accessible Data</div>
              <p className='hover:scale-110 transition text-xl duration-500 pt-4 cursor-pointer object-cover'> StatVital is fast, easy, and secure. <br />
               Our platform centralizes birth and death <br /> data in a secure digital repository, making <br /> it accessible
                to authorized users whenever and wherever they need it. Whether you're retrieving <br /> records for
                 administrative purposes or conducting <br /> research, our system puts the information you need right
                  at your fingertips.</p>
            </div>

          </div>

          <div className='flex gap-32 pt-12 secondThreeDiv'>
            <div className='service4'>
              <img src={security} alt="" />
              <div className="text-2xl uppercase text-blue-400 font-bold">Data Security and Privacy</div>
              <p className='hover:scale-110 transition text-xl duration-500 pt-4 cursor-pointer object-cover'>StatVital employs state-of-the-art encryption  and <br /> security protocols to protect sensitive information <br />
               from unauthorized access or disclosure, ensuring <br /> compliance with data protection regulations <br />
                and industry best practices.</p>
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