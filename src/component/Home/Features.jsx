import React from 'react'
import streamLine from '../../assets/StreamLineDataMgt.png'
import efficiency from '../../assets/EfficiencProduct.svg'
import central from '../../assets/DecentralizeData.png'
import security from '../../assets/Security.png'


const Features = () => {
  return (
    <div className='mainContainer'>
      

      <div className='flex justify-center center gap-40 pt-12 pr-20 serviceDiv'>
        <div>
        <div className="pr-18 text-blue-400 font-bold text-3xl">Our Features</div>          
        <p className='hover:scale-110 transition text-xl duration-500 pt-4 cursor-pointer object-cover'>  With intuitive interfaces and seamless integration <br />
         with existing systems, our solution streamlines <br /> workflows and eliminates the risk of human error,<br />
           ensuring that your records are always accurate <br /> and up-to-date.</p>
        </div>
        
        <div className='allService'>
          <div className='flex gap-60 firstThreeDiv'>
            <div className='service1'>
              <img src={streamLine} alt="" />
              <div className=" uppercase text-blue-400 font-bold text-2xl">Compliance And Security</div>
              <p className='hover:scale-110 transition text-xl duration-500 pt-4 cursor-pointer object-cover'>Our system is designed with compliance and <br /> security in mind, 
                regular security updates, <br /> and comprehensive audit trails to protect <br /> sensitive information. With built-in validation <br />
                 checks and access controls,
                 you can trust that <br /> your records are secure and compliant.</p>

            </div>
            <div className='service2'>
              <img src={efficiency} alt="" />
              <div className="uppercase text-blue-400 text-2xl font-bold">Accessibility and Integration</div>
              <p className='hover:scale-110 transition text-xl duration-500 pt-4 cursor-pointer object-cover'>our system seamlessly integrates with your existing hospital <br /> information systems and government databases, enabling <br />
               seamless data sharing and interoperability to improve <br /> communication
                 and collaboration across healthcare settings.</p>
            </div>

          </div>

          <div className='flex gap-36 pt-12 secondThreeDiv'>
            <div className='service4'>
              <img src={security} alt="" />
              <div className="text-2xl uppercase text-blue-400 font-bold">Customization and Scalability</div>
              <p className='hover:scale-110 transition text-xl duration-500 pt-4 cursor-pointer object-cover'> we offer flexible solutions that scale with your organization, <br /> whether you're a small community hospital or a large <br /> metropolitan mortuary.
                 With us, you get the flexibility <br /> you need without compromising on functionality or quality.</p>
            </div>

            <div className='service5'>
              <img src={efficiency} alt="" />
              <div className="text-2xl uppercase text-blue-400 font-bold"> Training and Support</div>
              <p className='hover:scale-110 transition text-xl duration-500 pt-4 cursor-pointer object-cover'>  Our dedicated team provides comprehensive <br /> training and ongoing support to ensure that <br /> you get the most out of our system. From user <br /> manuals and video tutorials to live support <br />
               channels and regular updates, we're committed <br /> to helping you succeed. Have a question or need  <br /> assistance?
                Just reach out to our friendly support team. </p>
            </div>

          </div>
        </div>

      </div>

      </div>



  );
}

export default Features;