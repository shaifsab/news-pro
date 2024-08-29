import React from 'react'
import ImageOne from '../../../../assets/images/cards/card-four/image.png'

// for 270x230px 

const CardFour = () => {
  return (
    <>
    <div className=' w-[270px] h-[230px] relative mb-[30px]'>
            <img src={ImageOne} alt="image" />
        <button className='absolute button right-[30px] top-[30px] text-[15px] font-semibold text-white bg-[#FF005C] py-[5px] px-[9px] leading-[20px] rounded-[3px] hover:bg-red-500'  >
        Lifestyle</button>
        <img className='absolute left-[10px] bottom-[82px]' src=".\src\assets\images\cards\card-four\bx_bx-time-five (3).png" alt="clock icon" />
        <p className='absolute data font-medium text-[13px] text-[#FFFFFF]  left-[34px] bottom-[81px] leading-5'>July 02, 2021</p>
        <p className=' absolute left-[10px] bottom-[23px] font-semibold text-[18px] text-white leading-[26px]'>Lifestyle brings big changes<br />in people's lives.</p>
    </div>
    </>
  )
}

export default CardFour
