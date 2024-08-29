import React from 'react'

const FooterSocialMedia = ({icon}) => {
  return (
    <>
      <div className="social-media text-white hover:text-[#000D39] hover:bg-white text-[24px] flex justify-center items-center w-[40px] h-[40px] bg-[#FFFFFF4D] rounded-full">
        {icon}
      </div>
      
    </>
  )
}

export default FooterSocialMedia
