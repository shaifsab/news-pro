import React from 'react'

const TopHeader = () => {
return (
<>
  <div className='topHeader-page w-screen h-[50px] bg-[#000D39] text-white'>
    <div className="container h-full">
      <div className="main flex items-center w-[1170px] h-full">
            {/* tranding */}
            <div className="tranding w-[100px] h-[34px] bg-[#ffffff36] rounded-[3px] flex justify-center items-center mr-[19px]">
              <p className='text-[17px] font-medium '>Tranding</p>
            </div>

            {/* middle text */}
            <p className='text-[17px] font-medium'>Every success is helped by someone behind the people</p>

            {/* data */}
            <div className="data text-[17px] font-medium flex items-center ml-auto">
              <img className='mr-[10px]' src=".\src\assets\icon\header\bi_cloud-sun-fill.png" alt="icon" />
              <p className='mr-[19px]'>Dhaka 36</p>
              <img className='mr-[9px]' src=".\src\assets\icon\header\bx_bx-calendar-check.png" alt="icon" />
              <p>Monday - July 2, 2021</p>
            </div>
      </div>
    </div>
  </div>

</>
)
}

export default TopHeader