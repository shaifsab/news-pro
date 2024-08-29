import React from 'react'
import ImageOne from '../../../../assets/images/cards/card-ten/Image.png'

// for 370x370px 

const CardTen = ({buttonBgColor, catagories, textOne, textTwo}) => {
  return (
    <>
    <div className=' w-[370px] h-[370px] relative'>
            <img src={ImageOne} alt="image" />
        <button className='absolute button left-[20px] bottom-[130px] text-[15px] font-semibold text-white bg-[#E12127] py-[5px] px-[9px] leading-[20px] rounded-[3px]' style={{backgroundColor: buttonBgColor}}  >
        {catagories}</button>
        <img className='absolute left-[20px] bottom-[87px] w-[24px]' src=".\src\assets\images\cards\card-three\bx_bx-time-five (2).png" alt="clock icon" />
        <p className='absolute data font-medium text-[17px] text-[#FFFFFF]  left-[51px] bottom-[89px] leading-5'>July 02, 2021</p>
        <p className=' absolute left-[20px] bottom-[20px] font-semibold text-[19px] text-white leading-[28px]'>{textOne}<br />{textTwo}</p>
    </div>
    </>
  )
}

export default CardTen

