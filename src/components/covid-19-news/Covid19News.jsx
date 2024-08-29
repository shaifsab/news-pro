import React from 'react'
import CardEight from '../props/cards/card-eight/CardEight'
import CardNine from '../props/cards/card-nine/CardNine'
import { Link } from 'react-router-dom'

const Covid19News = () => {
  return (
    <>
      <div className="covid10News mb-[70px]">
        <div className="container">
          <div className="main flex gap-[6px]">
            {/* covid news  */}
            <div className="covid-news ">
                {/* heading  */}
                  <div className="heading flex items-center">
                    <p className='font-semibold text-[25px] whitespace-nowrap leading-[35px] text-[#000D39] mr-[9px]'>Covid-19 News</p> <span className='bg-[#CFD4E4] w-[602px] h-[1px] inline-block'></span>
                  </div>
                  <CardEight/>
                  <div className='w-[752px] h-[450px] flex flex-wrap gap-[30px] mt-[30px]'>
                  <CardNine textColor='#5200FF' textOne='Bangladesh reports record' textTwo='Covid-19 deaths' />
                  <CardNine textColor='#FF005C' textOne='Bangladesh reports record' textTwo='Covid-19 deaths' />
                  <CardNine textColor='#FF005C' textOne='Bangladesh reports record' textTwo='Covid-19 deaths' />
                  <CardNine textColor='#E12127' textOne='Bangladesh reports record' textTwo='Covid-19 deaths' />
                  <CardNine textColor='#0085FF' textOne='Bangladesh reports record' textTwo='Covid-19 deaths' />
                  <CardNine textColor='#F85E07' textOne='Bangladesh reports record' textTwo='Covid-19 deaths' />
                  </div>
            </div>

            {/* follow us  */}
            <div className="follow-us">
            <div className="heading flex items-center">
                  <p className='font-semibold text-[25px] whitespace-nowrap leading-[35px] text-[#000D39] mr-[9px]'>Follow Us</p> <span className='bg-[#CFD4E4] w-[242px] h-[1px] inline-block'></span>
              </div>
              <div className='flex flex-col gap-[10px] mt-[21px]'>
              <Link><img src=".\src\assets\images\covid-19\1.png" alt="social"/></Link> 
              <Link><img src=".\src\assets\images\covid-19\2.png" alt="social"/></Link> 
              <Link><img src=".\src\assets\images\covid-19\3.png" alt="social"/></Link> 
              <Link><img src=".\src\assets\images\covid-19\4 (1).png" alt="social"/></Link> 
              <Link><img src=".\src\assets\images\covid-19\5 (1).png" alt="social"/></Link> 
              </div>

              <img className='mt-[30px]' src=".\src\assets\images\covid-19\Subscribes.png" alt="Subscribes" />
            </div>
             
          </div>
        </div>
      </div>
    </>
  )
}

export default Covid19News
