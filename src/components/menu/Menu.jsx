import React from 'react'
import SocialMedia from '../props/social-media/SocialMedia'

const Menu = () => {
return (
<>
  <nav className='menu-page w-screen h-[80px] bg-[#E5E9F6] items-center flex'>
    <div className="container">
      <div className="main items-center w-[1170px] flex">

        {/* menu  */}
        <ul className='flex gap-[40px] text-[17px] font-semibold '>
          <li className='hover:text-[#E12127]'>Home+</li>
          <li className='hover:text-[#E12127]'>Fashion</li>
          <li className='hover:text-[#E12127]'>Travel</li>
          <li className='hover:text-[#E12127]'>Tecnology</li>
          <li className='hover:text-[#E12127]'>lifestyle</li>
          <li className='hover:text-[#E12127]'>Features</li>
          <li className='hover:text-[#E12127]'>Education</li>
          <li className='hover:text-[#E12127]'>Pages+</li>
          <li className='hover:text-[#E12127]'>Sports</li>
        </ul>

        {/* icon  */}
        <div className="icon flex gap-[20px] items-center ml-[79px]">
          <SocialMedia source='.\src\assets\icon\menu\bx_bx-search-alt-2.png' />
          <SocialMedia source='.\src\assets\icon\menu\ant-design_menu-outlined.png' />
          <SocialMedia source='.\src\assets\icon\menu\Group 1 (1).png' />
        </div>


      </div>
    </div>
  </nav>
</>
)
}

export default Menu