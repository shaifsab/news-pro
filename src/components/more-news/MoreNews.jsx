import React from 'react'
import CardEleven from '../props/cards/card-eleven/CardEleven'
import ImageOne from '../../assets/images/cards/card-eleven/Image.png'
import bannerOne from '../../assets/images/cards/card-twelve/image.png'
import { Link } from 'react-router-dom'
import CardTwelve from '../props/cards/card-twelve/CardTwelve'

const MoreNews = () => {
  return (
    <>
    <div className="moreNews-page pb-[70px]">
      <div className="container">
        <div className="main w-screen mt-[58px] flex">
          {/* more news  */}
          <div className="more-news w-[770px]">

            {/* heading  */}
            <div className="heading flex items-center">
              <p className='font-semibold text-[25px] whitespace-nowrap leading-[35px] text-[#000D39]'>More News </p> 
              <span className='bg-[#CFD4E4] w-[619px] h-[1px] ml-[13px] inline-block'></span>
            </div>

            <div className="card flex flex-col gap-[30px]  mt-[21px]">
              <CardEleven image={ImageOne} buttonBgColor='#E12127' catagories='Fashion' titleTextOne='Hedonism and Tailoring: The Women’s' titleTextTwo='Spring 2021 Collections Had It All' />
              <CardEleven image={ImageOne} buttonBgColor='#FF005C' catagories='Lifestyle' titleTextOne='Lifestyle brings big changes inpeople' titleTextTwo='lives. Are you ready?' />
              <CardEleven image={ImageOne} buttonBgColor='#5200FF' catagories='Travel' titleTextOne='City of New York on a trip to Arctic' titleTextTwo='Nunavut' />
              <CardEleven image={ImageOne} buttonBgColor='#10CFFA' catagories='Technology' titleTextOne='Apple partnership with Microsoft helps' titleTextTwo='them both take on' />
              <CardEleven image={ImageOne} buttonBgColor='#07B404' catagories='Sports' titleTextOne='Nancy multi Chinese business woman' titleTextTwo='trying' />
            </div>


              {/* Load more section */}
              <div className="load-more w-[770px] relative flex items-center justify-center mt-[50px]">
                {/* Line behind the button */}
                <span className="absolute w-[770px] h-[1px] bg-[#CFD4E4] "></span>

                {/* Button */}
                <Link className="relative w-[150px] h-[40px] rounded-full border-[1px] border-[#CFD4E4] bg-white hover:bg-slate-200 flex justify-center items-center text-[#E12127] font-semibold text-[17px] leading-[28px]">
                  Load More
                </Link>
              </div>
          </div>


          {/* categorie  */}
          <div className="categorie ml-[30px]">
          <div className="heading flex items-center mb-[21px]">
              <p className='font-semibold text-[25px] whitespace-nowrap leading-[35px] text-[#000D39]'>Categories</p> 
              <span className='bg-[#CFD4E4] w-[230px] h-[1px] ml-[13px] inline-block'></span>
          </div>

          <div className="card flex flex-col gap-[20px] mb-[50px]">
            <CardTwelve buttonBgColor='#10CFFA' text='Technology' bannerImage={bannerOne} number='5'/>
            <CardTwelve buttonBgColor='#E12127' text='Fashion' bannerImage={bannerOne} number='8'/>
            <CardTwelve buttonBgColor='#5200FF' text='Travel' bannerImage={bannerOne} number='6'/>
            <CardTwelve buttonBgColor='#FF005C' text='Lifestyle' bannerImage={bannerOne} number='9'/>
            <CardTwelve buttonBgColor='#07B404' text='Sports' bannerImage={bannerOne} number='7'/>
          </div>

          <img src=".\src\assets\images\cards\card-twelve\Ads.png" alt="adds"/>
          </div>

        </div>
      </div>
    </div>
      
    </>
  )
}

export default MoreNews
