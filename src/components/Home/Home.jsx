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
import { Button } from 'bootstrap';


const Home = () => {
  const [active, setActive] = useState("car");
  const data = [
    {
      label: "Car",
      value: "car",
      icon: <img src={Car} />,
      desc: <div className="flex flex-row gap-6 w-auto h-28">
              <div className="relative h-11 w-full min-w-[200px]">
                <input placeholder="E.G. MH01AB9876"
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                <label
                  className="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-black transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Car Registraion No.<span><sup className='text-red-500'>*</sup></span>
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input placeholder="Enter Mobile No"
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                <label
                  className="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-black transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Mobile Number<span><sup className='text-red-500'>*</sup></span>
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input placeholder="Enter Email Address"
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                <label
                  className="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-black transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Email<span><sup className='text-red-500'>*</sup></span>
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <button className="block bg-orange-500 hover:bg-orange-700 text-white font-semibold py-3 px-6 ms-9 rounded-full">
                  Get qoute
                </button>
                <a href="" className='underline block text-orange-500 text-center mt-3'>Recent Quote</a>
              </div>
            </div>
    },
    {
      label: "Bike",
      value: "bike",
      icon: <img src={Bike} />,
      desc: <div className="flex flex-row gap-6 w-auto h-28">
              <div className="relative h-11 w-full min-w-[200px]">
                <input placeholder="E.G. MH01AB9876"
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                <label
                  className="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-black transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Bike Registraion No.<span><sup className='text-red-500'>*</sup></span>
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input placeholder="Enter Mobile No"
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                <label
                  className="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-black transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Mobile Number<span><sup className='text-red-500'>*</sup></span>
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input placeholder="Enter Email Address"
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                <label
                  className="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-black transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Email<span><sup className='text-red-500'>*</sup></span>
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <button className="block bg-orange-500 hover:bg-orange-700 text-white font-semibold py-3 px-6 ms-9 rounded-full">
                  Get qoute
                </button>
                <a href="" className='underline block text-orange-500 text-center mt-3'>Recent Quote</a>
              </div>
            </div>
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
          <div className='tabs bg-white shadow w-3/5 p-5'>
          <Tabs value={active} onChange={(newValue) => setActive(newValue)}>
            <TabsHeader>
              {data.map(({ label, value, icon }) => (
                <Tab key={value} value={value} onClick={() => setActive(value)}>
                  <div className={`flex items-center shadow shadow-orange-300 mx-2 p-2 w-16 h-16 border rounded-md ${active === value ? 'border-b-4 border-orange-400 bg-orange-200' : ''}`}>
                    <div className='flex items-center'>{icon}</div>
                  </div>
                  <div className={`mt-2 ${active === value ? 'border-b-2 border-orange-400' : ''}`}>
                    {label} 
                  </div>
                </Tab>
              ))}
            </TabsHeader>
            <div className='tabsbody mt-10'>
              <TabsBody>
                {data.map(({ value, desc }) => (
                  <TabPanel key={value} value={value}>
                    {desc}
                  </TabPanel>
                ))}
              </TabsBody>
            </div>
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