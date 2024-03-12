import React from 'react'

const FilledButton = (props) => {
  return (
    <div>
        <button className ='bg-blue-400 py-3 border-radius text-[20px] text-white font-family:   Georgia Cambria "Times New Roman" Times
         serif line-height: 1.5rem; rounded-2xl
                            btn' style={props.style}>
            {props.text}
        </button>
    </div>
  )
}

export default FilledButton