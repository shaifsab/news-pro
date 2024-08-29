import React from 'react'
import CardTen from '../props/cards/card-ten/CardTen'

const EditorChoices = () => {
  return (
    <>
      <div className="editorChoice-page pt-[57px] pb-[71px] bg-[#F9FAFF] ">
        <div className="container">
          <div className="main w-[1170px]">
            {/* heading  */}
            <div className="heading flex items-center">
                    <p className='font-semibold text-[25px] whitespace-nowrap leading-[35px] text-[#000D39]'>Editor Choices </p> 
                    <span className='bg-[#CFD4E4] w-[882px] h-[1px] ml-[13px] mr-[16px] inline-block'></span>
                    <img className='w-[79px]' src=".\src\assets\images\editor-choice\Slide Button.png" alt="img" />
            </div>

            {/* card  */}
            <div className="card flex gap-[30px] mt-[21px]">
              <CardTen buttonBgColor='#E12127' catagories='Fashion' textOne='Scent of to her to eye feedback.' textTwo='Perfected for with'/>
              <CardTen buttonBgColor='#10CFFA' catagories='Technology' textOne='Why the Internet Is Vulnerable to' textTwo='Outages'/>
              <CardTen buttonBgColor='#5200FF' catagories='Travel' textOne='Quarantine-free travel to resume on' textTwo='19 July for fully vaccinated'/>
            </div>

          </div>
        </div>
      </div>
      
    </>
  )
}

export default EditorChoices
