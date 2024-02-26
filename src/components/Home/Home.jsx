import React from 'react'
import MainBannerBg from '../../assets/Home/main-banner-bg.jpg'
import BannerImg from '../../assets/Home/banner-img.png'

const Home = () => {
  return (
    <div>
      <div className='background'>
        <div className='main-banner-bg'>
          <div className='inline-block'>
            <h2>Over 4 crore customers have faith in<br/> us because we care.</h2>
          </div>
          <div className='absolute right-5'>
            <img src={BannerImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home