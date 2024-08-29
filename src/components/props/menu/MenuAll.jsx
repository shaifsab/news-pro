import React from 'react'

const MenuAll = () => {
  return (
    <>
      <div className="menu w-[770px] h-[50px] bg-[#E5E9F6] flex  justify-center items-center">
                <ul className='flex gap-[57px] text-[17px] font-medium leading-[28px] rounded-[3px]'>
                  <li className='hover:text-[#E12127]'>All</li>
                  <li className='hover:text-[#E12127]'>Travel</li>
                  <li className='hover:text-[#E12127]'>Lifestyle</li>
                  <li className='hover:text-[#E12127]'>Fashion</li>
                  <li className='hover:text-[#E12127]'>Tecnology</li>
                  <li className='hover:text-[#E12127]'>Sports</li>
                </ul>
        </div>
    </>
  )
}

export default MenuAll
