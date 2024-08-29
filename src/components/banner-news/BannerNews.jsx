import React from 'react';
import image from '../../assets/images/banner-news/images/1 7.png';
import imageTwo from '../../assets/images/banner-news/images/3 6.png'
import imageThree from '../../assets/images/banner-news/images/3 7.png'
import imagefour from '../../assets/images/banner-news/images/4 1.png'
import sliderImage from '../../assets/icon/banner-images/Slider.png';
import Images from '../props/images/Images';

const BannerNews = () => {
  return (
    <div className="bannerNews-page w-screen mt-[70px] bg-[#FFFFFF] items-center flex">
      <div className="container">
        <div className="main flex gap-[30px]">

          <div>
                     <Images
                      image={image}
                      height='460px'
                      width='570px'
                      slider={sliderImage}
                      buttonBgColor = '#E12127'
                      categorie='Fashion'
                      timeWidth = '24px'
                      leftTime = '30px' 
                      bottomTime = '127px'
                      leftDate = '61px'
                      bottomDate = '129px'
                      fontSizeDate = '17px'
                      fontSizetitle = '25px'
                      date='July 02, 2021'
                      firstHeading='Hedonism and Tailoring: The Women’s'
                      secendHeading='Spring 2021 Collections Had It All'
                    />
          </div>


          <div className='extra flex flex-wrap gap-[30px]'>
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
            image={imageThree}
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
            firstHeading='The secret to moving this'
            secendHeading='ancient sphinx'
          />

          <Images
            image={imagefour}
            height='215px'
            width='570px'
            categorie='Lifestyle'
            buttonBgColor = '#FF005C'
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
          </div>
         

          


        </div>
      </div>
    </div>
  );
}

export default BannerNews;
