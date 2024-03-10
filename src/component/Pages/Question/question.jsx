import React from 'react'
import question from '../../../assets/Question.png'
import FilledButton from '../../../reuseables/bottons/FilledButton/FilledButton';
import { Link } from 'react-router-dom';

const Question = () => {
  return (
    <div className='mainContainer'>

      <div className='bg-blue-950 flex divy'>
        <div className='w-3/5 imageDiv'>
          <img className='h-screen' src={question} alt="" />
        </div>

        <div className=' text-6xl flex-col flex gap-48  pt-80'>
          <div className='hover:scale-110 transition duration-400 '>
            <Link to="/hospitalsignupform"><FilledButton text="SIGN UP AS HOSPITAL" style={{width: '800px', border: 'solid white 2px'}} /> </Link>
          </div>
          <div className='hover:scale-110 transition duration-400'>
            <Link to="/morguesignupform"><FilledButton text="SIGN UP AS MORGUE" style={{width: '800px', border: 'solid white 2px'}} /> </Link> 
          </div>

        </div>
        
      </div>
      
    </div>
  )
}

export default Question;