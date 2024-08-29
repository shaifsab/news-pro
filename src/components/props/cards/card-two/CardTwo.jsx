import React from 'react'
import ImageOne from '../../../../assets/images/cards/card-two/Image1.png'

// for 470x566px 

const CardTwo = () => {
  return (
    <>
        <div className=' w-[470px] h-[566px] bg-transparent relative mt-[33px] ml-[30px]'>
        <div>
            <img src={ImageOne} alt="image" />
        </div>
        <button className='absolute button right-[27px] top-[15px] text-[15px] font-semibold text-white bg-[#FF005C] py-[5px] px-[9px] leading-[20px] rounded-[3px] hover:bg-red-500'  >
        Lifestyle</button>
        <img className='absolute bottom-[89px] w-5' src=".\src\assets\icon\top-stories-icon\bx_bx-time-five.png" alt="clock icon" />
        <p className='absolute data font-medium text-[15px] text-[#555555]  left-[27px] bottom-[89px] leading-5'>July 02, 2021</p>
        <p className=' absolute bottom-0 font-semibold text-[25px] leading-[35px]'>Lifestyle brings big changes inpeople<br />lives. Are you ready?</p>
    </div>
      
    </>
  )
}

export default CardTwo
