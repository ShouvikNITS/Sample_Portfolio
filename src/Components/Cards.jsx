import React from 'react'

const Cards = (props) => {
  return (
    <div className=' flex flex-col gap-[1.5rem] border-2 w-[20rem] h-[30rem] rounded-b-2xl border-[#63E6BE]'>
        <h1 className=' flex justify-center items-center bg-[#63E6BE] h-[2.5rem] rounded-b-2xl uppercase font-semibold'>{props.heading}</h1>
        <ul className=' flex flex-col gap-2 p-[1rem]'>
            <li>{props.l1}</li>
            <li>{props.l2}</li>
            <li>{props.l3}</li>
            <li>{props.l4}</li>
            <li>{props.l5}</li>
            <li>{props.l6}</li>
        </ul>
    </div>
  )
}

export default Cards