import React from 'react'

const TopStories = () => {
  return (
    <>
      <div className="top-stories w-[370px] h-[130px] bg-white rounded-[3px] relative mb-5 hover:drop-shadow-xl">
        <img className='absolute left-[20px] top-[31px]' src=".\src\assets\icon\top-stories-icon\bx_bx-time-five.png" alt="clock icon" />
        <p className='absolute data font-medium text-[13px] text-[#555555]  left-[42px] top-[30px]'>July 02, 2021</p>
        <p className=' absolute left-[20px] bottom-[24px] font-semibold text-[18px] '>The secret to moving this ancient <br /> sphinx</p> 
      </div>
    </>
  )
}

export default TopStories
