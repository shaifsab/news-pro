import React from 'react'
import './Home.css'
import TopHeader from '../components/top-header/TopHeader'
import AddSection from '../components/add-section/AddSection'
import BannerNews from '../components/banner-news/BannerNews'
import TodayTopNews from '../components/today-top-news/TodayTopNews'
import MostPopularNews from '../components/most-popular-news/MostPopularNews'
import FashionLifestyle from '../components/fashion-lifestyle/FashionLifestyle'
import RecentPost from '../components/recent-post/RecentPost'
import TrendingNews from '../components/trending-news/TrendingNews'
import VideosNews from '../components/videos-news/VideosNews'
import Ads from '../components/ads/Ads'
import Covid19News from '../components/covid-19-news/Covid19News'
import EditorChoices from '../components/editor-choices/EditorChoices'
import MoreNews from '../components/more-news/MoreNews'
import Categories from '../components/categories/Categories'
import Footer from '../components/footer/Footer'
import Menu from '../components/menu/Menu'

const Home = () => {
  return (
    <>
      <TopHeader/>
      <AddSection/>
      <Menu/>
      <BannerNews/>
      <TodayTopNews/>
      <MostPopularNews/>
      <FashionLifestyle/>
      <RecentPost/>
      <TrendingNews/>
      <VideosNews/>
      <Ads/>
      <Covid19News/>
      <EditorChoices/>
      <MoreNews/>
      <Categories/>
      <Footer/>
    </>
  )
}

export default Home
