import React from 'react'

const FilledButton = (props) => {
  return (
    <div>
        <button className ='bg-blue-400 w-32 border-radius text-blue-950 font-family:   Georgia, Cambria, "Times New Roman", Times,
         serif; font-size: 1rem; line-height: 1.5rem; rounded-2xl
                            btn'>
            {props.text}
        </button>
    </div>
  )
}

export default FilledButton