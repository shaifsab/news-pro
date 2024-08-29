import React from 'react'
import TopStories from '../props/top-stories/TopStories'
import MenuAll from '../props/menu/MenuAll'
import CardOne from '../props/cards/card-one/cardOne'
import CardTwo from '../props/cards/card-two/CardTwo'
import Adds from '../props/adds/adds'
import AddsImage from '../../assets/images/Adds/adds-one/Adds1.png'

const MostPopularNews = () => {
  return (
    <>
      <div className="mostPopularNews w-screen pt-[57px] bg-[#F9FAFF]">
        <div className="container">
          <div className="main flex">
            <div className="main-first mr-[30px]">
              {/* heading  */}
              <p className='font-semibold text-[25px] leading-[35px]'>Most Popular News</p>

              {/* top stories */}
              <div className="top-stories mt-[17px]">
              <p className='font-medium text-[21px] mb-[10px]'>Top Stories</p>
              <TopStories/>
              <TopStories/>
              <TopStories/>
              <TopStories/>
              </div>
            </div>

            {/* news  */}
            <div className="news mt-[13px]">
             <MenuAll/>
              <div className='flex'>
              <div className="div">
              <CardOne buttonBgColor='#5200FF' categorie='Travel' textOne='New York on a trip to Arctic' textTwo='Nunavut of City'/>
              <CardOne buttonBgColor='#E12127' categorie='Fashion' textOne='Love Care A Beautiful Girl' textTwo='Breack a 24 Years Guy'/>
              </div >
              <CardTwo/>
              </div>

              

            </div>

          </div>
           {/* adds */}
           <div className='flex justify-center mt-[70px]'>
          <Adds image={AddsImage} bgColor='bg-[#E12127]' text='Shop Now'/>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default MostPopularNews
