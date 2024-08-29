import React from 'react'
import CardSix from '../props/cards/card-six/CardSix'

const TrendingNews = () => {
  return (
    <>
    <div className="trendingNews-page">
      <div className="container">
        <div className="main w-[1170px]">
          {/* heading  */}
          <div className="heading flex items-center ">
             <p className='font-semibold text-[25px] whitespace-nowrap leading-[35px] text-[#000D39] mr-[9px]'>Trending News</p> <span className='bg-[#CFD4E4] w-[979px] h-[1px] inline-block'></span>
          </div>

          {/* card  */}
          <div className="card flex gap-[30px] mt-[21px]">
            <CardSix buttonBgColor='#10D0FA' categorie='Technology' textOne='The secret to moving this' textTwo='ancient sphinx' />
            <CardSix buttonBgColor='#07B404' categorie='Sports' textOne='Nancy multi Chinese' textTwo='business woman trying' />
            <CardSix buttonBgColor='#818EFE' categorie='Worlds' textOne='Bestwood death prompts' textTwo='police investigation' />
            <CardSix buttonBgColor='#5200FF' categorie='Travel' textOne='City of New York on a trip' textTwo='to Arctic Nunavut' />
          </div>

          <img className='mt-[40px] mx-auto mb-[70px]' src=".\src\assets\images\treanding-news\Slide.png"  alt="slide" />
        </div>
      </div>
    </div>
      
    </>
  )
}

export default TrendingNews
