import React from 'react';
import '../../props/images/Images.css'

const Images = ({ image, height, width, categorie, slider, timeWidth, fontSizeDate, fontSizetitle, date, firstHeading, secendHeading,leftDate, bottomDate, leftTime, bottomTime, buttonBgColor  }) => {
  return (
    <div className="image rounded-[3px] relative"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: height,
        width: width,
      }}>
      
      {slider && (
        <img
          className="pt-[41px] pl-[30px]"
          src={slider}
          alt="slider"
        />
      )}
      
      <button className='absolute button right-[5%] top-[6.5%] text-[15px] font-semibold text-white py-1 px-3 rounded-[3px]' style={{backgroundColor: buttonBgColor }} >
        {categorie}
      </button>


      <img className='absolute'  src=".\src\assets\icon\props-icon\bx_bx-time-five.png" alt="icon"  style={{ width: timeWidth, left: leftTime, bottom: bottomTime }}/>
      <p className='absolute  font-medium text-white' style={{ fontSize: fontSizeDate , left: leftDate, bottom: bottomDate}}>{date}</p>

      <p className='absolute left-[5%] bottom-[7.8%] font-semibold text-white'style={{ fontSize: fontSizetitle }}>
        {firstHeading} <br /> {secendHeading}
      </p>
    </div>
  );
}

export default Images;
