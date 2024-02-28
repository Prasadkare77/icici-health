import React from 'react'
import MainBannerBg from '../../assets/Home/main-banner-bg.jpg'
import BannerImg from '../../assets/Home/banner-img.png'

const Home = () => {
  return (
    <div>
      <div className='background'>
        <div className='main-banner-bg w-full h-full' style={{ backgroundImage: `url(${MainBannerBg})` }}>
          <div className='inline-block left-0'>
            <h2 className='mt-5 font-extrabold text-lg'>Over 4 crore customers have faith in<br/> us because we care.</h2>
          </div>
          <div className='inline-block'>
            <img src={BannerImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home