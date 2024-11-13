import React from 'react'
import Button from '../Components/Button'

const Contact = () => {
  return (
    <div id='contact' className=' flex flex-col justify-center items-center pl-8 pr-8 ml-[10rem] h-screen bg-[#63E6BE]'>
    <h1 className=' text-3xl text-white font-medium relative top-[-10rem]'>Contact Me</h1>
        <div className=' flex flex-col items-center gap-6 justify-center w-full'>
            <form className=' flex flex-col gap-4 w-[50%]' action="get">
                <input className='border-2 h-12 rounded-xl p-4' type="text" placeholder='Your Name' required='' />
                <input className='border-2 h-12 rounded-xl p-4' type="email" placeholder='Your Email' required='' />
                <textarea className=' border-2 h-[10rem] rounded-xl resize-none p-4' placeholder='Write Your Message' rows="4" required='' ></textarea>
            </form>
            <Button 
                head='Submit'
            />
        </div>
    </div>
  )
}

export default Contact