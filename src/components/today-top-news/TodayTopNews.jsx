import React from 'react'
import imageTwo from '../../assets/images/banner-news/images/3 6.png'
import Images from '../props/images/Images'

const TodayTopNews = () => {
return (
<>
  <div className='todayTopNews-page w-screen mt-[57px] bg-[#FFFFFF] mb-[70px] flex'>
    <div className="container">
      <div className="main">

        {/* head title */}

        <div className="head flex items-center justify-between w-[1170px]">
          <div className="text w-[211px] h-[32px] mr-[15px]">
            <p className='font-semibold text-[24px]'>Todays Top News</p>
          </div>

          <span className='w-[832px] mr-[15px] h-[1px] bg-[#CFD4E4]'></span>
          <img className=' ' src="./src/assets/icon/today-top-news/Slider (1).png" alt="icon" />
        </div>

        {/* card  */}
       <div className="image flex mt-[42px] gap-[30px] w-[1170px]">
       <Images
            image={imageTwo}
            height='215px'
            width='270px'
            categorie='Technology'
            buttonBgColor = '#10D0FA'
            timeWidth = '18px'
            leftTime = '20px'
            bottomTime = '76px'
            leftDate = '42px'
            bottomDate = '75px'
            fontSizeDate = '13px'
            fontSizetitle = '18px'
            date='July 02, 2021'
            firstHeading='The secret to moving this'
            secendHeading='ancient sphinx'
          />

        <Images
            image={imageTwo}
            height='215px'
            width='270px'
            categorie='Politics'
            buttonBgColor = '#10D0FA'
            timeWidth = '18px'
            leftTime = '20px'
            bottomTime = '76px'
            leftDate = '42px'
            bottomDate = '75px'
            fontSizeDate = '13px'
            fontSizetitle = '18px'
            date='July 02, 2021'
            firstHeading='The secret to moving this'
            secendHeading='ancient sphinx'
          />

          <Images
            image={imageTwo}
            height='215px'
            width='270px'
            categorie='Education'
            buttonBgColor = '#0085FF'
            timeWidth = '18px'
            leftTime = '20px'
            bottomTime = '76px'
            leftDate = '42px'
            bottomDate = '75px'
            fontSizeDate = '13px'
            fontSizetitle = '18px'
            date='July 02, 2021'
            firstHeading='Bestwood death prompts'
            secendHeading='police investigation'
          />
                 <Images
            image={imageTwo}
            height='215px'
            width='270px'
            categorie='Travel'
            buttonBgColor = '#5200FF'
            timeWidth = '18px'
            leftTime = '20px'
            bottomTime = '76px'
            leftDate = '42px'
            bottomDate = '75px'
            fontSizeDate = '13px'
            fontSizetitle = '18px'
            date='July 02, 2021'
            firstHeading='City of New York on a trip'
            secendHeading='to Arctic Nunavut'
          />
          

       </div>


      </div>
    </div>

  </div>
</>
)
}

export default TodayTopNews