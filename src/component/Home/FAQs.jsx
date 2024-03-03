import React from 'react'
import faq from '../../assets/[removal.ai]_a1f37c0d-461f-401c-bd84-1b10e9ccfdac-faqq.png'
import FilledButton from '../../reuseables/bottons/FilledButton/FilledButton'
import lady from '../../assets/smilingOfficeLady.webp'
import { Link } from 'react-router-dom'


const FAQs = () => {
  return (
    <div className='w-10%'>
      <img src={faq} alt="" />

      <div className='bg-blue-950 h-100 flex gap-96  pt-0 ready'>
        <div className='pt-40 r-38'>
        <div className="text-4xl text-white font-bold">Ready For Awesome Projects With Us?</div>

          <div className='text-white pt-4 text-2xl'>
          <p>Let's talk About Your Project</p>
          </div>
          <div>
          <Link to="/contactus"><FilledButton text={"Contact us --->"}/> </Link> 

          </div>

          
          </div>

        <div className=' image'>
          <img src={lady} alt="" />
        </div>
       


      </div>
      
    </div>
  )
}

export default FAQs;