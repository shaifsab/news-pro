import React from 'react'
import { Link } from 'react-router-dom'

const CardNine = ({textColor, textOne, textTwo}) => {
return (
<>
    <div className="card-nine w-[346px] bg-transparent flex">
        <img src=".\src\assets\images\cards\card-nine\Image (6) 1.png" alt="image" />
        <div className='ml-[20px]'>

            <Link>
            <p className="underline  hover:text-blue-700 font-semibold text-[15px] mt-3 leading-[20px]"
                style={{color: textColor}}>Covid-19</p>
            </Link>

            <div className='flex items-center mt-[11px]'>
                <img className='w-[18px]' src=".\src\assets\images\cards\card-eight\bx_bx-time-five (7).png"
                    alt="clock icon" />
                <p className='ml-[4px] data font-medium text-[13px] text-[#555555] leading-[20px]'>July 02, 2021</p>
            </div>

            <p className='font-semibold text-[15px] leading-[26px] mt-[5px]'>{textOne}<br />{textTwo}</p>
        </div>
    </div>

</>
)
}

export default CardNine