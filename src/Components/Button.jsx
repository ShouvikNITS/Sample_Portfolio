import React from 'react'

const Button = (props) => {
  return (
    <div className=' flex justify-center items-center rounded-lg bg-neutral-900 uppercase text-white font-medium drop-shadow-[0px_5px_4px_#000000] w-[6rem] h-[2.5rem] cursor-pointer'>{props.head}</div>
  )
}

export default Button