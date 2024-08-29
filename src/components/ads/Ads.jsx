import React from 'react'
import Adds from '../props/adds/adds'
import AddsImage from '../../assets/images/Adds/adds-one/Adds1.png'

const Ads = () => {
  return (
    <>
       {/* adds */}
       <div className='flex justify-center mt-[70px] mb-[57px]'>
          <Adds image={AddsImage} bgColor='bg-[#E12127]' text='Shop Now'/>
          </div>
    </>
  )
}

export default Ads
