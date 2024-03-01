import React from 'react'
import About from '../../assets/AboutUsImg2-removebg-preview.png'

const AboutUs = () => {
  return (
    <div className='flex pr-1.5'>
      <div className='pb-14 image'>
      <img src={About} alt="" />
      </div>

      <div className='content'>
      <p className='text-blue-400 font-bold font-sans text-2xl txt'>WELCOME TO STATVITAL</p>
      <p>We specialize in providing accurate and reliable records of births and deaths for individuals seeking vital information <br />
       for various purposes. Here's what you can expect from our service:</p> <br />
        <p className='text-blue-400 font-extrabold text-1xl' >Reliability and Accuracy: </p>
        <p>We take great care to ensure the accuracy and reliability of our data. Our records are <br />
        sourced from trusted governmental and official sources, guaranteeing authenticity.
        </p>

        <p className='text-blue-400 font-extrabold text-1xl' >Ease Of Access: </p>
        <p>Our user-friendly interface makes it easy for you to search for and retrieve birth and <br />
         death records quickly and efficiently. Whether you're conducting genealogical research,<br />
        verifying vital statistics, or for legal purposes, our platform provides seamless access to the information you need.
        </p>

        <p className='text-blue-400 font-extrabold text-1xl' >Privacy And Security: </p>
        <p>We prioritize the privacy and security of personal data. Our platform adheres to stringent security protocols to <br />
         safeguard sensitive information.
        </p>

        <p className='text-blue-400 font-extrabold text-1xl' >Customer Support: </p>
        <p>Have questions or need assistance? Our dedicated customer support team is here to help you with any inquiries or <br />
         concerns you may have regarding our birth and death data records.
        </p>
         <br />
        <p>At StartVital, we are committed to providing you with reliable and accessible birth and death data records <br />
         to meet your informational needs. Explore our database today and unlock valuable insights into vital statistics.</p>

      </div>

      
      
    </div>
  )
}

export default AboutUs;