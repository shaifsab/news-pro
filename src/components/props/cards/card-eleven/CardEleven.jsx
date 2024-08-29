import React from 'react'

// for 741x230 

const CardEleven = ({image, buttonBgColor, catagories, titleTextOne, titleTextTwo}) => {
  return (
    <>
      <div className="card-eight w-[741px] h-[230px] bg-transparent flex">
        <img src={image} alt="image" />
        <div className='ml-[30px]'>
        <button className='button mt-[20px] text-[15px] font-semibold text-white bg-[#5200FF] py-[5px] px-[9px] leading-[20px] rounded-[3px]' style={{backgroundColor: buttonBgColor}} >
        {catagories}</button>

        <div className='flex items-center mt-[19px]'>
        <img className='w-6'  src=".\src\assets\images\cards\card-eight\bx_bx-time-five (7).png" alt="clock icon" />
        <p className='ml-[7px] data font-medium text-[17px] text-[#555555] leading-[20px]'>July 02, 2021</p>
        </div>

        <p className='font-semibold text-[19px] leading-[28px] mt-[11px]'>{titleTextOne} <br />{titleTextTwo}</p>
        <p className='text-[15px] text-[#555555] leading-[28px] mt-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor</p>
        </div>
    </div>
    </>
  )
}

export default CardEleven

// style={{backgroundColor: buttonBgColor}}
