import React, { useState } from 'react'
import ilLogo from '../../assets/Header/il-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Header = () => {
  const [isDropdownOpen1, setDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setDropdownOpen4] = useState(false);
  const [isDropdownOpen5, setDropdownOpen5] = useState(false);
  const [isDropdownOpen6, setDropdownOpen6] = useState(false);
  const [isDropdownOpen7, setDropdownOpen7] = useState(false);

  const openDropdown1 = () => {
    setDropdownOpen1(true)
    setDropdownOpen2(false);
    setDropdownOpen3(false);
    setDropdownOpen4(false);
    setDropdownOpen5(false);
    setDropdownOpen6(false);
    setDropdownOpen7(false);
    
  };
  const closeDropdown1 = () => {
    setDropdownOpen1(false);
  };

  const openDropdown2 = () => {
    setDropdownOpen2(true);
    setDropdownOpen1(false)
    
    setDropdownOpen3(false);
    setDropdownOpen4(false);
    setDropdownOpen5(false);
    setDropdownOpen6(false);
    setDropdownOpen7(false);
  };
  const closeDropdown2 = () => {
    setDropdownOpen2(false);
  };

  const openDropdown3 = () => {
    setDropdownOpen1(false)
    setDropdownOpen2(false);
    setDropdownOpen3(true);
    setDropdownOpen4(false);
    setDropdownOpen5(false);
    setDropdownOpen6(false);
    setDropdownOpen7(false);
  };
  const closeDropdown3 = () => {
    setDropdownOpen3(false);
  };

  const openDropdown4 = () => {
    setDropdownOpen1(false)
    setDropdownOpen2(false);
    setDropdownOpen3(false);
    setDropdownOpen4(true);
    setDropdownOpen5(false);
    setDropdownOpen6(false);
    setDropdownOpen7(false);
  };
  const closeDropdown4 = () => {
    setDropdownOpen4(false);
  };

  const openDropdown5 = () => {
    setDropdownOpen1(false)
    setDropdownOpen2(false);
    setDropdownOpen3(false);
    setDropdownOpen4(false);
    setDropdownOpen5(true);
    setDropdownOpen6(false);
    setDropdownOpen7(false);
  };
  const closeDropdown5 = () => {
    setDropdownOpen5(false);
  };

  const openDropdown6 = () => {
    setDropdownOpen1(false)
    setDropdownOpen2(false);
    setDropdownOpen3(false);
    setDropdownOpen4(false);
    setDropdownOpen5(false);
    setDropdownOpen6(true);
    setDropdownOpen7(false);
  };
  const closeDropdown6 = () => {
    setDropdownOpen6(false);
  };

  const openDropdown7 = () => {
    setDropdownOpen1(false)
    setDropdownOpen2(false);
    setDropdownOpen3(false);
    setDropdownOpen4(false);
    setDropdownOpen5(false);
    setDropdownOpen6(false);
    setDropdownOpen7(true);
  };
  const closeDropdown7 = () => {
    setDropdownOpen7(false);
  };

  return (
    <>

      {/* Font Awsome CDN Link for icons */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        <nav className="bg-orange-600 p-3">
          <div className="container mx-auto flex justify-between items-center">

            {/* Logo */}
            <div className="flex items-center">
              <img src={ilLogo} alt="Logo" className="w-full" />
            </div>
            
            {/* Dropdown Menu */}
            <div className="space-x-4 font-semibold">
              <div className="relative inline-block text-left">
                <a href="#" className="text-white" onMouseEnter={openDropdown1} onMouseLeave={closeDropdown1}>Motor Insurance {!isDropdownOpen1 && <i className="fa fa-caret-right mx-1" aria-hidden="true"></i>} {isDropdownOpen1 && <i className="fa fa-caret-right mx-1 rotate-90" aria-hidden="true"></i>} </a>
                  {isDropdownOpen1 && (
                    <div className="origin-top-right absolute right-0 mt-0 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" onMouseEnter={openDropdown1} onMouseLeave={closeDropdown1}>
                      <div className="py-5 text-left pl-24" role="none">
                        <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Motor Insurance</a>
                        <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Car Insurance</a>
                        <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Bike Insurance</a>
                        <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Motor Floater</a>
                      </div>
                    </div>
                  )}
              </div>
              <div className="relative inline-block text-left">
                <a href='#' className="text-white" onMouseEnter={openDropdown2} onMouseLeave={closeDropdown2}>Health Insurance{!isDropdownOpen2 && <i className="fa fa-caret-right mx-1" aria-hidden="true"></i>} {isDropdownOpen2 && <i className="fa fa-caret-right mx-1 rotate-90" aria-hidden="true"></i>}</a>
                {isDropdownOpen2 && (
                  <div className="origin-top-right absolute right-0 mt-0 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" onMouseEnter={openDropdown2} onMouseLeave={closeDropdown2}>
                    <div className="py-5 text-left pl-24" role="none">
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
              <div className="relative inline-block text-left">
                <a href='#' className="text-white" onMouseEnter={openDropdown3} onMouseLeave={closeDropdown3}>Travel Insurance{!isDropdownOpen3 && <i className="fa fa-caret-right mx-1" aria-hidden="true"></i>} {isDropdownOpen3 && <i className="fa fa-caret-right mx-1 rotate-90" aria-hidden="true"></i>}</a>
                {isDropdownOpen3 && (
                  <div className="origin-top-right absolute right-0 mt-0 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" onMouseEnter={openDropdown3} onMouseLeave={closeDropdown3}>
                    <div className="py-5 text-left pl-24" role="none">
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Travel Insurance</a>
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Single Trip </a>
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Gold Multi Trip </a>
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Student Travel </a>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative inline-block text-left">
                <a href='#' className="text-white" onMouseEnter={openDropdown4} onMouseLeave={closeDropdown4}>Business Insurance{!isDropdownOpen4 && <i className="fa fa-caret-right mx-1" aria-hidden="true"></i>} {isDropdownOpen4 && <i className="fa fa-caret-right mx-1 rotate-90" aria-hidden="true"></i>}</a>
                {isDropdownOpen4 && (
                  <div className="origin-top-right absolute right-0 mt-0 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" onMouseEnter={openDropdown4} onMouseLeave={closeDropdown4}>
                    <div className="py-5 text-left pl-24" role="none">
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Business Insurance</a>
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Marine Transit </a>
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Workmen's Compensation</a>
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Group Health Insurance</a>
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Fire Insurance - Sookshma</a>
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Marine Open Insurance</a>
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Fire Insurance - Griha For Housing Societies</a>
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Professional Indemnity - Policy For Medical Practitioners</a>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative inline-block text-left">
                <a href='#' className="text-white" onMouseEnter={openDropdown5} onMouseLeave={closeDropdown5}>Other Insurance{!isDropdownOpen5 && <i className="fa fa-caret-right mx-1" aria-hidden="true"></i>} {isDropdownOpen5 && <i className="fa fa-caret-right mx-1 rotate-90" aria-hidden="true"></i>}</a>
                {isDropdownOpen5 && (
                  <div className="origin-top-right absolute right-0 mt-0 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" onMouseEnter={openDropdown5} onMouseLeave={closeDropdown5}>
                    <div className="py-5 text-left pl-24" role="none">
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Crop Insurance</a>
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">NRI Insurance</a>
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Cyber Insurance</a>
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">ICICI Bharat Griha Raksha Policy</a>
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Complete Home Protect</a>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative inline-block text-left">
                <a href='#' className="text-white" onMouseEnter={openDropdown6} onMouseLeave={closeDropdown6}>Renewals{!isDropdownOpen6 && <i className="fa fa-caret-right mx-1" aria-hidden="true"></i>} {isDropdownOpen6 && <i className="fa fa-caret-right mx-1 rotate-90" aria-hidden="true"></i>}</a>
                {isDropdownOpen6 && (
                  <div className="origin-top-right absolute right-0 mt-0 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" onMouseEnter={openDropdown6} onMouseLeave={closeDropdown6}>
                    <div className="py-5 text-left pl-24" role="none">
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">All Policy Renewal</a>
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Car Policy</a>
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Bike Policy</a>
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Health Policy</a>
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Travel Policy</a>
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Business Insurance</a>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative inline-block text-left">
                <a href='#' className="text-white" onMouseEnter={openDropdown7} onMouseLeave={closeDropdown7}>Claims{!isDropdownOpen7 && <i className="fa fa-caret-right mx-1" aria-hidden="true"></i>} {isDropdownOpen7 && <i className="fa fa-caret-right mx-1 rotate-90" aria-hidden="true"></i>}</a>
                {isDropdownOpen7 && (
                  <div className="origin-top-right absolute right-0 mt-0 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" onMouseEnter={openDropdown7} onMouseLeave={closeDropdown7}>
                    <div className="py-5 text-left pl-24" role="none">
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Health Claims</a>
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Motoe Claims</a>
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Travel Claims</a>
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Home Claims</a>
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Cyber Insurance Claims</a>
                    </div>
                    <div className="py-5 text-left pl-24 inline-block" role="none">
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Ola Claims</a>
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Redbus Claims</a>
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Corporate Claims</a>
                      <a href="#" className="text-gray-700 hover:dark:text-orange-600 hover:px-5 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Mobile Claims - M - Kash</a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div>
              <a href="#" className="text-white">Login<i className="fa fa-caret-right mx-1" aria-hidden="true"></i></a>
            </div>
          </div>
        </nav>    
    </>
  )
}

export default Header