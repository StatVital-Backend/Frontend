import React from 'react'
import Emergency from '../../assets/emergency.png'
import Email from '../../assets/Email.png'
import Location from '../../assets/location.png'
import WorkingHour from '../../assets/workinghour.png'

const ContactUs = () => {

  return (
    <div className='pt-12  w-full flex justify-center center mainContainer'>
      <div className=''>
        <div className='pb-16'>
          <div className='justify-center center flex font-bold font-sans'>
            <p className='text-blue-400 text-2xl'>GET IN TOUCH </p>
            </div>
          <div className='justify-center center flex font-sans' >
            <p className='text-black text-3xl'>Contact</p>
          </div>       
        </div>

        <div className='flex gap-20'>
          <div className='bg-blue-400 w-80 h-72 emer'>
            <img className='w-16' src={Emergency} alt="" />
            <p className='text-blue-950 font-bold font-sans text-3xl justify-center pt-5 center flex'>EMERGENCY</p>
            <div className='text-blue-950 pt-5 pl-20 numbs'>
            <p>(234) 816-667-2396 </p>
            <p>(234) 703-534-0689</p>
            <p>(234) 703-388-8686</p>
            </div>

            
          </div>

          <div className='bg-blue-950 w-80 h-72 emer'>
            <img className='w-16 justify-center center flex ' src={Location} alt="" />
            <p className='text-blue-400 font-bold pt-5 font-sans text-3xl center justify-center flex'>LOCATION</p>
            <div className='text-blue-400 pt-5 center flex justify-center addresses'>
              <p>312, Herbert Macauley, Sabo, Yaba </p>
            </div>
            </div>

            <div className='bg-blue-400 w-80 h-72 emer'>
            <img className='w-32' src={Email} alt="" />
            <p className='text-blue-950 font-bold font-sans justify-center text-3xl pt-5 center flex'>EMAIL</p>
            <div className='text-blue-950 pt-5 pl-16 addresses'>
            <p>statvital@startvital.com</p>
            </div>
            </div>

            <div className='bg-blue-950 w-80 h-72 emer'>
              <img className='w-20 ' src={WorkingHour} alt="" />
              <p className='text-blue-400 font-bold font-sans text-3xl justify-center pt-2 center flex'>WORKING HOURS</p>
              <div className='text-blue-400 pt-5 pl-16 addresses'>
                  <p>Mon-Sat 09:00-20:00</p>
                  <p>Sundays Emergency only</p>
              </div>
            </div>


        </div>
      </div>


      
    </div>
  )
}

export default ContactUs;