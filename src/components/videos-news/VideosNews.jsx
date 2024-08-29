import React from 'react'
import CardSeven from '../props/cards/card-seven/CardSeven'
import News from '../props/news/News'

const VideosNews = () => {
  return (
    <>
    <div className="videoNews-page bg-[#00061D] pt-[56px]">
      <div className="container">
        <div className="main">
          {/* heading  */}
          <div className="heading flex items-center">
             <p className='font-semibold text-[25px] whitespace-nowrap leading-[35px] text-[#ffffff] mr-[9px]'>Videos</p> <span className='bg-[#CFD4E4] w-[1073px] h-[1px] inline-block'></span>
          </div>

          <div className="flex mt-[19px] pb-[64px]">

      
          {/* video  */}
        <CardSeven text='Hedonism and Tailoring: The Women’s Spring 2021 Collections Had It All'/>

          {/* cart  */}
          <div className="cart ml-[30px] w-[470px] flex flex-col items-center justify-center h-[539px] border-[1px] border-slate-500">
            <News/>
            <News/>
            <News/>
            <News/>
            <News/>
          </div>

          </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default VideosNews
