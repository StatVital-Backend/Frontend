import React from 'react'

const OutlineButton = (props) => {
  return (
    <div>
        <button className='w-32 h-22 border-blue-400 text-blue-400 text-center font-family: Georgia, 
                            Cambria, "Times New Roman", Times, serif; font-size: 
                            1rem; line-height: 1.5rem; border-1 border solid
                            rounded-2xl btn'>
        {props.text}
        </button>
        
    </div>
  )
}

export default OutlineButton;
