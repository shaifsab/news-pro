import React from 'react'
import ImageOne from '../../../../assets/images/cards/card-three/Image.png'

// for 470x490px 

const CardThree = () => {
  return (
    <>
    <div className=' w-[470px] h-[490px] relative'>
            <img src={ImageOne} alt="image" />
        <button className='absolute button right-[30px] top-[30px] text-[15px] font-semibold text-white bg-[#E12127] py-[5px] px-[9px] leading-[20px] rounded-[3px] hover:bg-red-500'  >
        Fashion</button>
        <img className='absolute left-[30px] bottom-[157px]' src=".\src\assets\images\cards\card-three\bx_bx-time-five (2).png" alt="clock icon" />
        <p className='absolute data font-medium text-[17px] text-[#FFFFFF]  left-[61px] bottom-[159px] leading-5'>July 02, 2021</p>
        <p className=' absolute left-[30px] bottom-[66px] font-semibold text-[21px] text-white leading-[35px]'>Hedonism and Tailoring: The Women’s<br />Spring 2021 Collections Had It All</p>
    </div>
    </>
  )
}

export default CardThree
