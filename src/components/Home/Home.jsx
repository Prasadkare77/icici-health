import React, {useState} from 'react'
import MainBannerBg from '../../assets/Home/main-banner-bg.jpg'
import BannerImg from '../../assets/Home/banner-img.png'
import classNames from 'classnames'
import {Tabs,TabsHeader,TabsBody,Tab,TabPanel} from "@material-tailwind/react";
import Car from '../../assets/Home/Tabs/car.png'
import Bike from '../../assets/Home/Tabs/bike.png'
import Health from '../../assets/Home/Tabs/health.png'
import Travel from '../../assets/Home/Tabs/travel.png'
import Business from '../../assets/Home/Tabs/business.png'
import Renewal from '../../assets/Home/Tabs/renewal.png'


const Home = () => {
  const [active, setActive] = useState("car");
  const data = [
    {
      label: "Car",
      value: "car",
      icon: <img src={Car} />,
    },
    {
      label: "Bike",
      value: "bike",
      icon: <img src={Bike} />,
    },
    {
      label: "Health",
      value: "health",
      icon: <img src={Health} />,
    },
    {
      label: "Travel",
      value: "travel",
      icon: <img src={Travel} />,
    },
    {
      label: "Business",
      value: "business",
      icon: <img src={Business} />,
    },
    {
      label: "Renewal",
      value: "renewal",
      icon: <img src={Renewal} />,
    },
  ]


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
          <div className='tabs bg-white shadow w-80 p-5'>
          <Tabs value={active} onChange={(newValue) => setActive(newValue)}>
            <TabsHeader>
              {data.map(({ label, value, icon }) => (
                <Tab key={value} value={value} onClick={() => setActive(value)}>
                  
                    <div className={`flex items-center mx-2 p-2 w-16 h-16 border rounded-md ${active === value ? 'bg-orange-100' : ''}`}>
                    <div className='flex items-center'> {icon}</div>
                    
                  </div>
                  <div className='mt-2'>
                    {label} 
                  </div>
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  {/* {desc} */}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
          </div>
          <div className='carasole'>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home