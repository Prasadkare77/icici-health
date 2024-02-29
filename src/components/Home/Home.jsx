import React, {useState} from 'react'
import MainBannerBg from '../../assets/Home/main-banner-bg.jpg'
import BannerImg from '../../assets/Home/banner-img.png'
import classNames from 'classnames'
import Car from '../../assets/Home/Tabs/car.png'
import Bike from '../../assets/Home/Tabs/bike.png'
import Health from '../../assets/Home/Tabs/health.png'
import Travel from '../../assets/Home/Tabs/travel.png'
import Business from '../../assets/Home/Tabs/business.png'
import Renewal from '../../assets/Home/Tabs/renewal.png'


const Home = () => {

  const tabOptions = [
  { id: 1, label: 'Car', icon: <img src={Car} /> },
  { id: 2, label: 'Bike', icon: <img src={Bike} /> },
  { id: 3, label: 'Health', icon: <img src={Health} /> },
  { id: 4, label: 'Travel', icon: <img src={Travel} /> },
  { id: 5, label: 'Business', icon: <img src={Business} /> },
  { id: 6, label: 'Renewal', icon: <img src={Renewal} /> },
];

  const [activeTab, setActiveTab] = useState(1);

  const tabClasses = (tabId) =>
    classNames(
      'cursor-pointer',
      'px-4',
      'py-2',
      'border-b-2',
      'border-transparent',
      { 'border-blue-500': activeTab === tabId },
      { 'text-blue-500': activeTab === tabId },
      'flex',
      'items-center'
    );

  return (
    <div>
      <div className='background'>
        <div className='main-banner-bg flex w-full' style={{ backgroundImage: `url(${MainBannerBg})` }}>
          <div className='inline-block text-left mt-10 ms-10'>
            <h2 className='mt-5 font-bold text-3xl text-left'>Over 4 crore customers have faith in<br/> us because we care.</h2>
          </div>
          <div className='inline-block right-0 ms-60'>
            <img src={BannerImg} alt="" />
          </div>
        </div>

        <div>
          <div className="tabs flex">
            {tabOptions.map((tab) => (
              <div
                key={tab.id}
                className={tabClasses(tab.id)}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="mr-2">{tab.icon}</span>
                <span>{tab.label}</span>
              </div>
            ))}
          </div>
          <div className='carasole'>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home