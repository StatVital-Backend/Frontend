import React from 'react'

const GhostButton = (props) => {
  return (
    <div>
        <button className='text-blue-400 text-center font-family: Georgia, 
                            Cambria, "Times New Roman", Times, serif; font-size: 
                            1rem; line-height: 1.5rem;  btn' onClick={props.onClick}>
        {props.text}
        </button>
    </div>
  )
}

export default GhostButton;