import React from 'react'
import ImageOne from '../../../../assets/images/cards/cards-one/Image1.png'


// for 270x269px 

const CardOne = ({buttonBgColor, categorie, textOne, textTwo}) => {
  return (
    <>
    <div className='card-one w-[270px] h-[269px] bg-transparent relative mt-[33px]'>
        <div>
            <img src={ImageOne} alt="image" />
        </div>
        <button className='absolute button right-[27px] top-[15px] text-[15px] font-semibold text-white bg-black py-[5px] px-[9px] leading-[20px] rounded-[3px] hover:bg-red-500' style={{backgroundColor: buttonBgColor}} >
        {categorie}</button>
        <img className='absolute bottom-[57px]' src=".\src\assets\icon\top-stories-icon\bx_bx-time-five.png" alt="clock icon" />
        <p className='absolute data font-medium text-[13px] text-[#555555]  left-[22px] bottom-[56px] leading-[20px]'>July 02, 2021</p>
        <p className=' absolute bottom-0 font-semibold text-[18px] leading-[26px]'>{textOne}<br />{textTwo}</p>
    </div>

    </>
  )
}

export default CardOne
