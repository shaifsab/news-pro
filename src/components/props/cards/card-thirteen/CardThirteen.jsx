import React from 'react'
import { Link } from 'react-router-dom'

const CardThirteen = ({textColor, textOne, textTwo , footerImage, catagories}) => {
return (
<>
    <div className="card-nine w-[287px] bg-transparent flex">
        <img src={footerImage} alt="image" />
        <div className='ml-[10px]'>

            <Link>
            <p className="underline  hover:text-blue-700 font-semibold text-[15px] leading-[20px]"
                style={{color: textColor}}>{catagories}</p>
            </Link>

            <div className='flex items-center mt-[11px]'>
                <img className='w-[18px]' src=".\src\assets\images\footer\clock.png"
                    alt="clock icon" />
                <p className='ml-[4px] data font-medium text-[13px] text-white leading-[20px]'>July 02, 2021</p>
            </div>

            <p className='font-semibold text-[17px] text-white leading-[24px] mt-[7px]'>{textOne}<br />{textTwo}</p>
        </div>
    </div>

</>
)
}

export default CardThirteen
