import React from 'react'
import img1 from "../images/Shriyash.logo.jpg"
import img2 from "../images/img7.jpg"

const Contact = () => {
  return (
    <>
    <div className='m-1 md:p-6 md:rounded-lg md:flex md:flex-col md:justify-center md:items-center md:gap-5 bg-[#9ed1a6] md:w-[70%] md:m-auto md:mt-8 p-1 rounded-lg'>
      <div>
        <img className='md:h-[600px] md:w-[800px] rounded-lg' src={img1} alt="" />
      </div>
      
    </div>
    <div className='m-1 md:p-6 md:rounded-lg md:flex md:flex-col md:justify-center md:items-center md:gap-5 bg-[#9ed1a6] md:w-[70%] md:m-auto md:mt-8 p-1 rounded-lg'>
    
      <div>
        <img className='md:h-[600px] md:w-[800px] rounded-lg'  src={img2} alt="" />
      </div>
    </div>
  </>
  )
}

export default Contact