import React from 'react'
import { Link } from 'react-router-dom'

const CardTwelve = ({buttonBgColor, text, bannerImage, number}) => {
  return (
    <>
      <div className="card w-[370px] h-[70px] relative">
        <img src={bannerImage} alt="image"/>
        <p className='font-semibold absolute top-[23px] left-[20px] text-[25px] leading-[35px] text-[#FFFFFF]'>{text}</p>
        <Link className='font-semibold absolute  w-[30px] h-[30px] flex justify-center items-center rounded-full top-[25px] right-[20px] text-[25px] leading-[30px] text-[#FFFFFF]' style={{backgroundColor: buttonBgColor}} >{number}</Link>
      </div>
    </>
  )
}

export default CardTwelve
