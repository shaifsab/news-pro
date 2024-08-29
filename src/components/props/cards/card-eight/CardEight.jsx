import React from 'react'

const CardEight = () => {
  return (
    <>
    <div className="card-eight w-[704px] h-[276px] bg-transparent flex mt-[21px]">
        <img src=".\src\assets\images\cards\card-eight\Image (5) 1.png" alt="image" />
        <div className='ml-[30px]'>
        <button className='button mt-[20px] text-[15px] font-semibold text-white bg-[#5200FF] py-[5px] px-[9px] leading-[20px] rounded-[3px] hover:bg-red-500' >
        Covid-19</button>

        <div className='flex items-center mt-[19px]'>
        <img  src=".\src\assets\images\cards\card-eight\bx_bx-time-five (7).png" alt="clock icon" />
        <p className='ml-[7px] data font-medium text-[17px] text-[#555555] leading-[20px]'>July 02, 2021</p>
        </div>

        <p className='font-semibold text-[19px] leading-[28px] mt-[11px]'>Hedonism and Tailoring: The Women’s <br />Spring 2021 Collections Had It All</p>
        <p className='text-[15px] text-[#555555] leading-[28px] mt-[11px]'>Lorem ipsum dolor sit amet, consectetur  <br />adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua.</p>




        </div>
    </div>
      
    </>
  )
}

export default CardEight


// style={{backgroundColor: buttonBgColor}}