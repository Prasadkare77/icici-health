import React, { useState } from 'react'
import ilLogo from '../../assets/Header/il-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Header = () => {
  const [isDropdownOpen1, setDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setDropdownOpen4] = useState(false);

  const openDropdown1 = () => {
    setDropdownOpen1(true);
    setDropdownOpen2(false)
  };
  const closeDropdown1 = () => {
    setDropdownOpen1(false);
  };

  const openDropdown2 = () => {
    setDropdownOpen2(true);
    setDropdownOpen1(false)
  };
  const closeDropdown2 = () => {
    setDropdownOpen2(false);
  };

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <nav className="bg-orange-600 p-4">
        <div className="container mx-auto flex justify-between items-center">

          {/* Logo */}
        <div className="flex items-center">
          <img src={ilLogo} alt="Logo" className="w-full mr-2" />
        </div>
          
          
          <div className="space-x-4">
            
            {/* Dropdown Menu */}
            <div className="relative inline-block text-left">
              <a href="#" className="text-white" onMouseEnter={openDropdown1} onMouseLeave={closeDropdown1}>Motor Insurance <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                {isDropdownOpen1 && (
                  <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" onMouseEnter={openDropdown1} onMouseLeave={closeDropdown1}>
                    <div className="py-1" role="none">
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Motor Insurance</a>
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Car Insurance</a>
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Bike Insurance</a>
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Motor Floater</a>
                    </div>
                  </div>
                )}
            </div>
            <div className="relative inline-block text-left">
              <a href='#' className="text-white" onMouseEnter={openDropdown2} onMouseLeave={closeDropdown2}>Health Insurance</a>
              {isDropdownOpen2 && (
                <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                  <div className="py-1" role="none">
                    <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Health Insurance</a>
                    <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Health AdvantEdge</a>
                    <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Max Protect</a>
                    <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Health Boostert</a>
                    <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Personal Protect</a>
                    <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Arogya Sanjeevani Policy</a>
                    <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Corona Kavach Policy</a>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <a href="#" className="text-white">Login</a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header