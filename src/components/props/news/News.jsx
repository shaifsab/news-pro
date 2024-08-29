import React from 'react'

const News = () => {
  return (
    <>
    <div className='w-[430px] h-[100px] bg-transparent flex hover:bg-[#ffffff1d] rounded-[3px]'>
        <img className='p-[10px]' src=".\src\assets\images\news\Image (4) 1.png" alt="image" />
        
        
        <div className="div">
            <p className='font-semibold text-[17px] mt-[23px] leading-6 text-white'>Brings big changes in people's lives.</p>
            <div className='flex items-center mt-[10px]'>
            <img src=".\src\assets\images\news\bx_bx-time-five (6).png" alt="icon" />
            <p className='font-medium text-[13px] leading-5 text-[#828282] ml-[6px]'> July 02, 2021 </p>
            </div>

        </div>

    </div>
       
    </>
  )
}

export default News
