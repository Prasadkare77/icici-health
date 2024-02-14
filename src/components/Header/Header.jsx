import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <>
      <nav className="bg-white border-b border-orange-200 dark:bg-orange-600 dark:border-orange-700">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-xl font-bold text-orange-800 dark:text-white">
            My App
          </div>
          <div className="hidden md:flex space-x-2 justify-center">
            <a href="#" className="text-gray-800 dark:text-white px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-green-700">Motor Insurance</a>

            <div className="relative">
              <button onClick={handleDropdown} className="text-gray-800 dark:text-white px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">Health Insurance</button>
              {dropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg dark:bg-white">
                  <a href="#" className="block px-4 py-2 text-gray-800 dark:text-black hover:bg-gray-200 dark:hover:bg-white">Health Insurance</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 dark:text-black hover:bg-gray-200 dark:hover:bg-gray-700">Health AdvantEdge</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 dark:text-black hover:bg-gray-200 dark:hover:bg-gray-700">Max Protect
                  </a>
                </div>
              )}
            </div>

            <div className="relative">
              <button onClick={handleDropdown} className="text-gray-800 dark:text-white px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">Health Insurance</button>
              {dropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg dark:bg-white">
                  <a href="#" className="block px-4 py-2 text-gray-800 dark:text-black hover:bg-gray-200 dark:hover:bg-white">Health Insurance</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 dark:text-black hover:bg-gray-200 dark:hover:bg-gray-700">Health AdvantEdge</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 dark:text-black hover:bg-gray-200 dark:hover:bg-gray-700">Max Protect
                  </a>
                </div>
              )}
            </div>
           
            <a href="#" className="text-gray-800 dark:text-white px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"> Item 3 </a>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg
                className="w-6 h-6 text-gray-500 hover:text-gray-800 dark:hover:text-white"
                x-descriptions="Hamburger"
                viewBox="0 0 24 24"
              >
                <path
                  className="fill-current"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header