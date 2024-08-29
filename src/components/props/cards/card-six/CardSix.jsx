import React from 'react'
import ImageOne from '../../../../assets/images/cards/card-six/image.png'


// for 270x215px 

const CardSix = ({buttonBgColor, categorie, textOne, textTwo}) => {
  return (
    <>
    <div className='card-one w-[270px] h-[328px] bg-white relative drop-shadow-2xl '>
        <div>
            <img src={ImageOne} alt="image" />
        </div>
        <button className='absolute button right-[27px] top-[15px] text-[15px] font-semibold text-white bg-black py-[5px] px-[9px] leading-[20px] rounded-[3px] hover:bg-red-500' style={{backgroundColor: buttonBgColor}} >
        {categorie}</button>
        <img className='absolute left-5 bottom-[76px]' src=".\src\assets\icon\top-stories-icon\bx_bx-time-five.png" alt="clock icon" />
        <p className='absolute data font-medium text-[13px] text-[#555555]  left-[42px] bottom-[75px] leading-[20px]'>July 02, 2021</p>
        <p className=' absolute bottom-[19px] left-[20px] font-semibold text-[18px] leading-[26px]'>{textOne}<br />{textTwo}</p>
    </div>

    </>
  )
}

export default CardSix
