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

import { Select, Option } from "@material-tailwind/react";
import { Carousel } from "@material-tailwind/react";
import DatePicker from './DatePicker';


const Home = () => {
  const [active, setActive] = useState("car");

  const [dropdown1, setDropdown1] = useState('Option 1');

  const healthOptions1 = ['Max Protect', 'Health AdvantEdge', 'Arogya Sanjeevani Policy', 'Health Booster', 'Personal Protect'];

  const travelScopeOptons = ['USA or Canada', 'Asia','Schengen', 'Rest of the world']


  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    mobileNo: '',
    email: '',
    pincode: '',
    yourName: '',
    // Add more fields as needed
  });
  const handleInputClick = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { mobileNo, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [mobileNo]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log('Form submitted:', formData);
    // Close the form after submission
    setShowForm(false);
  };
  
  
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
      desc: <div className="flex flex-row gap-6 w-auto h-28">
              <div className="relative h-11 w-full min-w-[200px]">
                <select value={dropdown1} onChange={(e) => setDropdown1(e.target.value)} className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                  {healthOptions1.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <label
                  className="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Select Products
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input placeholder="Add Member"
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                <label
                  className="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-black transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Insure Members
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px] z-0">
                <input placeholder="Add Details"
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" 
                  readOnly onClick={handleInputClick}/>
                  {showForm && (
                    <form onSubmit={handleSubmit} className='flex flex-col gap-6 w-72 rounded-md border-2 border-solid z-10 p-10 '>
                      <div className="relative h-11 w-full min-w-[200px]">
                        <input placeholder="Mobile No"
                          class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                          // value={formData.mobileNo}
                          onChange={handleChange}
                          />
                        <label
                          class="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                          Mobile No.<span><sup className='text-red-500'>*</sup></span>
                        </label>
                      </div>
                      <div className="relative h-11 w-full min-w-[200px]">
                        <input placeholder="Enter Email Address"
                            class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            // value={formData.email}
                            onChange={handleChange}
                            />
                          <label
                            class="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Email.<span><sup className='text-red-500'>*</sup></span>
                          </label>
                      </div>
                      <div className="relative h-11 w-full min-w-[200px]">
                        <input placeholder="Enter Pincode"
                            class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            // value={formData.pincode}
                            onChange={handleChange} 
                            />
                          <label
                            class="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Pincode.<span><sup className='text-red-500'>*</sup></span>
                          </label>
                      </div>
                      <div className="relative h-11 w-full min-w-[200px]">
                        <input placeholder="Enter Your Name"
                            class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            // value={formData.yourName}
                            onChange={handleChange} 
                            />
                          <label
                            class="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Your Name.
                          </label>
                      </div>
                      {/* Add more form fields as needed */}
                      <div className='ms-40 text-orange-600 text-lg '>
                        <a href="">Done</a>
                      </div>
                    </form>
                  )}
                <label
                  className="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-black transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Contact Details<span><sup className='text-red-500'>*</sup></span>
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <button className="block bg-orange-500 hover:bg-orange-700 text-white font-semibold py-3 px-6 ms-9 rounded-full">
                  Get qoute
                </button>
              </div>
            </div>
    },
    {
      label: "Travel",
      value: "travel",
      icon: <img src={Travel} />,
      desc: <div className="flex flex-row gap-6 w-auto h-28">
              <div className="relative h-11 w-full min-w-[200px]">
                <select value={dropdown1} onChange={(e) => setDropdown1(e.target.value)} className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                  {travelScopeOptons.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <label
                  className="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Your travel scope
                </label>
              </div>

              <div className="relative h-11 w-full min-w-[200px]">
                <select value={dropdown1} onChange={(e) => setDropdown1(e.target.value)} className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                    {travelScopeOptons.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <label
                    className="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Trip start Date
                  </label>
              </div>

              {/* Flowbite Tailwind CSS CDN  Link for Date Picker */}
              <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
              <script src="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js"></script>

              <div className="relative h-11 w-full min-w-[200px]">
                <select  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                    <option >
                      <DatePicker />
                    </option>
                  </select>
                  <label
                    className="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Trip end Date
                  </label>
              </div>
              
              <div className="relative h-11 w-full min-w-[200px]">
                <button className="block bg-orange-500 hover:bg-orange-700 text-white font-semibold py-3 px-6 ms-9 rounded-full">
                  Get qoute
                </button>
              </div>
            </div>
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
          <div className='carousel'>
            <Carousel
              className="rounded-xl"
              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                        activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                      }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
            >
              <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                alt="image 3"
                className="h-full w-full object-cover"
              />
            </Carousel>
              
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home