import React from 'react'
import Adds from '../props/adds/adds'
import SocialMedia from '../props/social-media/SocialMedia'

const AddSection = () => {
return (
<>
  <div className="addSection-page w-screen h-[150px] bg-[#F1F4FF] items-center flex">
    <div className="container">
      <div className="main flex items-center w-[1170px]">
        {/* logo */}
        <div className="logo w-[242px] h-[60px] mr-[71px]">
          <img src=".\src\assets\icon\add-section\Logo.png" alt="logo" />
        </div>

        {/* adds */}
        <Adds image='./src/assets/icon/add-section/adds/Adds 1.png' bgColor='bg-[#ffffff69]' text='Buy Now'/>

        {/* social media  */}
        <div className="social-media flex gap-[13px] items-center ml-[10px]">
          <SocialMedia source='.\src\assets\icon\add-section\social\bx_bxl-facebook.png' />
          <SocialMedia source='.\src\assets\icon\add-section\social\bx_bxl-twitter.png' />
          <SocialMedia source='.\src\assets\icon\add-section\social\eva_linkedin-fill.png' />
          <SocialMedia source='.\src\assets\icon\add-section\social\fontisto_whatsapp.png' />
          <SocialMedia source='.\src\assets\icon\add-section\social\cib_instagram.png' />
        </div>

        {/* user  */}
        <div className="user w-[50px] h-[50px] ml-[33px]">
          <img src=".\src\assets\icon\add-section\User.png" alt="user" />
        </div>
      </div>
    </div>
  </div>
</>
)
}

export default AddSection