import React from 'react';
import laptop from '../../assets/Laptop.avif'
import streamLine from '../../assets/StreamLineDataMgt.png'
import efficiency from '../../assets/EfficiencProduct.svg'
import central from '../../assets/DecentralizeData.png'
import security from '../../assets/Security.png'


const Services = () => {
  return (
    <div className='mainContainer'>

      <div className= ''>
        <img className='relative opacity-3 h-[60vh] w-[100%] hover:opacity-45' src={laptop} alt='background'/>
        <div className='absolute text-center justify-center service top-60 left-[800px]'>
          {/* <p className='text-blue-400 font-bold font-sans text-5xl txt'>Our Services</p> */}
          {/* <p className='text-blue-400 font-normal text-2xl tet'>We Have Investmented In The Development And Management Of Such Innovative And Productive <br /> Solutions</p>       */}
        </div>
      </div>
      

      <div className='flex gap-40 pt-12 pr-20 serviceDiv'>
        
        <div>
          
          <div className="pr-18 text-blue-400 font-bold text-3xl">Why StatVital ?</div>          
        <p> Trust is paramount when it comes to vital statistics.
         Our system employs <br /> advanced algorithms and validation
        checks to ensure the accuracy and integrity of every record <br />
        with regulatory requirements and standards</p>
        </div>
        
        <div className='allService'>
          <div className='flex gap-20 firstThreeDiv'>
            <div className='service1'>
              <img src={streamLine} alt="" />
              <div className=" uppercase text-blue-400 font-bold text-3xl">Streamlined Data Management</div>
              <p>With our automated system, say goodbye <br /> to cumbersome 
               paperwork and manual data <br /> entry. Our platform seamlessly 
                integrates <br /> into your existing workflows, streamlining the <br />
                 process of recording and managing birth and death data from
                  admission to final disposition.</p>

            </div>
            <div className='service2'>
              <img src={efficiency} alt="" />
              <div className="uppercase text-blue-400 text-3xl font-bold">Improved Efficiency and Productivity</div>
              <p>Time is of the essence in healthcare and <br /> mortuary services. By
               automating repetitive <br /> tasks and optimizing workflows, our system <br />
              frees up valuable time for your staff to focus on <br /> providing quality
                care and services to patients and families, ultimately boosting 
                 productivity and satisfaction.</p>
            </div>

            <div className='service3'>
              <img src={central} alt="" />
              <div className="text-3xl uppercase text-blue-400 font-bold">Centralized and Accessible Data</div>
              <p> StatVital is fast, easy, and secure. <br />
               Our platform centralizes birth and death <br /> data in a secure digital repository, making <br /> it accessible
                to authorized users whenever and wherever they need it. Whether you're retrieving <br /> records for
                 administrative purposes or conducting <br /> research, our system puts the information you need right
                  at your fingertips.</p>
            </div>

          </div>

          <div className='flex gap-40 pt-12 secondThreeDiv'>
            <div className='service4'>
              <img src={security} alt="" />
              <div className="text-3xl uppercase text-blue-400 font-bold">Data Security and Privacy</div>
              <p>StatVital employs state-of-the-art encryption  and security protocols to protect sensitive information 
               from unauthorized access or disclosure, ensuring compliance with data protection regulations <br />
                and industry best practices.</p>
            </div>

            <div className='service5'>
              <img src={efficiency} alt="" />
              <div className="text-3xl uppercase text-blue-400 font-bold">Cost-Effectiveness</div>
              <p> Investing in our automated system is not just about improving efficiency; it's also about saving costs 
               in the long run. By reducing manual labor, minimizing errors, and optimizing workflows, our system delivers <br />
                a strong return on investment, allowing you to allocate resources more effectively and focus on what matters most</p>
            </div>

            <div className='pr-44 service5'>
              <img src={streamLine} alt="" />
              <div className="text-3xl uppercase text-blue-400 font-bold">Streamlined Data Management</div>
              <p>Our platform seamlessly integrates into your existing workflows, streamlining the process of recording and managing
               birth and death data from admission to final disposition.</p>
            </div>

          </div>
          
      

        </div>

      </div>

      </div>
  )
}

export default Services;