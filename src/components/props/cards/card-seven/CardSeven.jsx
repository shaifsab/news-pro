import React from 'react'
import ImageOne from '../../../../assets/images/cards/card-seven/image.png'


// for 670x460px 

const CardSeven = ({text}) => {
  return (
    <>
    <div className='card-one w-[670px] h-[546px] relative '>
        <div>
            <img src={ImageOne} alt="image" />
        </div>
        <img className='absolute bottom-0' src=".\src\assets\images\cards\card-seven\bx_bx-time-five (5).png" alt="clock icon" />
        <p className='absolute data font-medium text-[13px] text-[#ffffff]  left-[24px] bottom-0 leading-[20px]'>July 02, 2021</p>
        <p className=' absolute bottom-[35px] font-semibold text-[17px] text-white leading-[35px]'>{text}</p>
        <img className='absolute right-0 bottom-0' src=".\src\assets\images\cards\card-seven\Group 5 (1).png" alt="" />
    </div>

    </>
  )
}

export default CardSeven
