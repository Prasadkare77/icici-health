import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div>
        <nav className="bg-gray-100 p-6">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold">
                <Link to="/">Logo</Link>
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline">
                  <NavLink
                    to="/page1"
                    className="ml-4 px-3 py-2 rounded-md text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-200"
                    activeClassName="bg-gray-200 text-gray-900"
                  >
                    Page 1
                  </NavLink>
                  <NavLink
                    to="/page2"
                    className="ml-4 px-3 py-2 rounded-md text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-200"
                    activeClassName="bg-gray-200 text-gray-900"
                  >
                    Page 2
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Header