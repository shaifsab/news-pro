import React from 'react'
import { Link } from 'react-router-dom'
import FooterSocialMedia from '../props/footer-social-media/FooterSocialMedia'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import CardThirteen from '../props/cards/card-thirteen/CardThirteen'
import footerImageOne from '../../assets/images/footer/image.png'

const Footer = () => {
  return (
    <>
    <div className="footer-page bg-[#000D39]">
      <div className="container">
        <div className="main w-[1170px]">

          {/* subscribe  */}
          <div className="subscribe pt-[56px] pb-[70px] flex flex-col items-center">
            <div className="text-center ">
              <h1 className='font-semibold text-[35px] leading-[40px] text-[#FFFFFF] mb-[10px]'>Subscribe For Newsletter</h1>
              <p className='text-[17px] leading-[28px] text-[#FFFFFF] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            {/* input  */}
            <div className="input w-[608px] h-[60px] bg-white rounded-[3px] mt-[32px] flex justify-between items-center ">
              <input className='text-[17px] w-full leading-[28px] text-[#555555] pl-[30px] outline-none border-none rounded-[3px]' type="text" placeholder='Enter your email' />
              <Link className='bg-[#E12127] flex w-[80px] h-[60px]  justify-center items-center rounded-[3px]' ><img src=".\src\assets\images\footer\simple-icons_minutemailer.png" alt="submit" /></Link>
            </div>
          </div>

          <div className="bottom mt-[50px] pb-[70px] flex">
            {/* news-pro  */}
            <div className="bottom-one w-[270px] h-[286px] bg-transparent">
              <Link><img src=".\src\assets\images\logo\Logo.png" alt="logo" /></Link>
              <p className='text-17px] leading-[28px] text-[#FFFFFF] mt-[42px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              
              <div className="social-media flex gap-[10px] mt-[33px]">
              <FooterSocialMedia icon={<FaFacebookF />}/>
              <FooterSocialMedia icon={<FaTwitter />}/>
              <FooterSocialMedia icon={<FaInstagram />}/>
              <FooterSocialMedia icon={<FaYoutube />}/>
              </div>

            </div>

            {/* useful link  */}
            <div className="useful-link ml-[70px] mt-[15px]">
              <h1 className='font-semibold text-[25px] leading-[35px] text-[#FFFFFF] mb-[27px]'>Useful Link</h1>

              <Link className='text-[17px] hover:text-[#E12127] leading-[35px] text-[#FFFFFF] block'>Contact Us</Link>
              <Link className='text-[17px] hover:text-[#E12127] leading-[35px] text-[#FFFFFF] block'>About Us</Link>
              <Link className='text-[17px] hover:text-[#E12127] leading-[35px] text-[#FFFFFF] block'>Fox Around the World</Link>
              <Link className='text-[17px] hover:text-[#E12127] leading-[35px] text-[#FFFFFF] block'>Advertise With Us</Link>
              <Link className='text-[17px] hover:text-[#E12127] leading-[35px] text-[#FFFFFF] block'>Ad Choices</Link>
              <Link className='text-[17px] hover:text-[#E12127] leading-[35px] text-[#FFFFFF] block'>Media Relations</Link>
              <Link className='text-[17px] hover:text-[#E12127] leading-[35px] text-[#FFFFFF] block'>Compliance</Link>
            </div>

            {/* top catagories */}
              <div className="useful-link ml-[74px] mt-[15px]">
              <h1 className='font-semibold text-[25px] leading-[35px] text-[#FFFFFF] mb-[27px]'>Top Categories</h1>

              <Link className='text-[17px] hover:text-[#E12127] leading-[35px] text-[#FFFFFF] block'>Fashion</Link>
              <Link className='text-[17px] hover:text-[#E12127] leading-[35px] text-[#FFFFFF] block'>Lifestyle</Link>
              <Link className='text-[17px] hover:text-[#E12127] leading-[35px] text-[#FFFFFF] block'>Technology</Link>
              <Link className='text-[17px] hover:text-[#E12127] leading-[35px] text-[#FFFFFF] block'>Travel</Link>
              <Link className='text-[17px] hover:text-[#E12127] leading-[35px] text-[#FFFFFF] block'>Sports</Link>
              <Link className='text-[17px] hover:text-[#E12127] leading-[35px] text-[#FFFFFF] block'>Health</Link>
              <Link className='text-[17px] hover:text-[#E12127] leading-[35px] text-[#FFFFFF] block'>World</Link>
              
            </div>


            {/* latest news  */}
            <div className="latest-news w-[287px] h-[306px] bg-transparent ml-[100px] mt-[15px]">
            <h1 className='font-semibold text-[25px] leading-[35px] text-[#FFFFFF] mb-[41px]'>Latest News</h1>

            <div className="div flex flex-col gap-[30px]">
            <CardThirteen catagories='Lifestyle' textColor='#FF005C' textOne='Brings big changes in' textTwo="people's lives." footerImage={footerImageOne}/>
            <CardThirteen catagories='Fashion' textColor='#FF005C' textOne='Brings big changes in' textTwo="people's lives." footerImage={footerImageOne}/>
            </div>
            </div>




          </div>

          

        </div>
      </div>
      <div className="copyright w-screen h-[70px] bg-[#FFFFFF33] flex justify-center items-center">
          <p className='text-[17px] leading-[28px] text-[#FFFFFF]'>Copyright 2021. All Right Reserved</p>
      </div>
    </div>
      
    </>
  )
}

export default Footer
