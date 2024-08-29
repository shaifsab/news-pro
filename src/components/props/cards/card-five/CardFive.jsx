import React from 'react'
import { Link } from 'react-router-dom'

// for 110xpx90

const CardFive = ({Images, playButton , catagorie }) => {
  return (
    <>
    <div className=' w-[350px] h-[110px] border-[1px] border-bg-[#E5E9F6] relative mt-[10px] flex'>
        <div className='relative mt-[10px] ml-[10px]'>
            <img src={Images} alt="image" />
            <img className='absolute left-[37px] top-[25px]' src={playButton} alt="icon" />
        </div>
        <div className="text  mt-[5px] ml-[10px] relative">
            <Link><p className="underline text-[#E12127] hover:text-blue-700 font-medium text-[13px]  leading-[20px]">{catagorie}</p></Link>
            
            <div className='flex items-center gap-[6px]'> 
                <img className='' src="./src/assets/images/cards/card-five/bx_bx-time-five (4).png" alt="clock icon" />
                <p className='font-medium text-[13px] text-[#555555] leading-[20px]'>July 02, 2021</p>
            </div>

            <p className='font-semibold text-[15px] mt-[7px] text-[#000D39] leading-[24px]'>Brings big changes in<br />people's lives.</p>
         </div>
        
    </div>
    </>
  )
}

export default CardFive