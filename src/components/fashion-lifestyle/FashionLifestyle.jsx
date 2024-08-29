import React from 'react'
import { Link } from 'react-router-dom'
import CardThree from '../props/cards/card-three/CardThree'
import ImageOne from '../../assets/images/cards/card-five/image.png'
import CardFour from '../props/cards/card-four/CardFour'
import CardFive from '../props/cards/card-five/CardFive'

const FashionLifestyle = () => {
  return (
    <>
    <div className="fashionLifeStyle-page pt-[57px]">
      <div className="container">
        <div className="main ">
          <div className="flex">
          {/* fashion and lifestyle  */}
          <div className="fashion mr-[30px]">  
              <div className="main-one flex items-center">
              <p className='font-semibold text-[25px] leading-[35px] text-[#000D39]'>Fashion & Lifestyle</p> <span className='bg-[#CFD4E4] mr-[10px] ml-[13px] w-[447px] h-[1px] block'></span>
              <Link><p className="underline text-[#E12127] hover:text-blue-700 font-medium text-[17px]  leading-[28px]">View All</p></Link>
              </div>

              <div className='flex mt-[21px]'>
              <CardThree/>
              <div className="div ml-[30px]">
              <CardFour/>
              <CardFour/>
              </div>
              </div>
          </div>



            {/* recent post  */}
            <div className="recent-post w-[370px] h-[534px] border-[1px] border-bg-[#E5E9F6] mt-3 text-[#060027]">
              <div className="flex">
                <Link className='w-[185px] h-[44px] flex justify-center items-center bg-[#000D39] hover:bg-[#ffffff] hover:border-[1px] hover:border-bg-[#E5E9F6] text-[#FFFFFF] hover:text-[#060027]'><p className='font-semibold text-[21px] leading-[30px] font-lato '>Recent Post</p></Link>
                <Link className='w-[185px] h-[44px] flex justify-center items-center bg-[#ffffff] hover:bg-[#000D39] border-[1px] border-bg-[#E5E9F6] text-[#060027] hover:text-[#FFFFFF]'><p className='font-semibold text-[21px] leading-[30px] font-lato '>Popular Post</p></Link>
              </div>
              <div className='flex flex-col items-center justify-center'>
              <CardFive Images={ImageOne} playButton='.\src\assets\images\cards\card-five\music.png' catagorie='Fashion'/>
              <CardFive Images={ImageOne} playButton='.\src\assets\images\cards\card-five\play.png' catagorie='Lifestyle'/>
              <CardFive Images={ImageOne} playButton='.\src\assets\images\cards\card-five\music.png' catagorie='Technology'/>
              <CardFive Images={ImageOne} playButton='.\src\assets\images\cards\card-five\play.png' catagorie='Travel'/>
              </div>
              
            </div>

          </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default FashionLifestyle
