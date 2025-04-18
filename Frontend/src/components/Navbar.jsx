import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from '../redux/slice/toggler'
import Logo from '../assets/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const isloggedin = useSelector((state) => state.toggle) // Fix here
    const dispatch = useDispatch()
    const navlinks = (
        <>
          <li>
              <input type="text" placeholder='Search the destination' className='border-2 border-gray-300 rounded-full p-1 pr-10 pl-5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm w-full' />
          </li>

          <li>
            <NavLink
              to='/'
              className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              style={({ isActive }) => ({ color: isActive ? "blue" : "" })}
            >
              Home
            </NavLink>
          </li>
      
          <li>
            <NavLink
              to='/itenary'
              className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              style={({ isActive }) => ({ color: isActive ? "blue" : "" })}
            >
              Itenary
            </NavLink>
          </li>
      
          <li>
            <NavLink
              to='/advisory'
              className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              style={({ isActive }) => ({ color: isActive ? "blue" : "" })}
            >
              Advisory
            </NavLink>
          </li>
      
          {isloggedin ? (
            <li>
              <NavLink
                to='/profile'
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                style={({ isActive }) => ({ color: isActive ? "blue" : "" })}
              >
                Profile
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink
                to='/logout'
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                style={({ isActive }) => ({ color: isActive ? "blue" : "" })}
              >
                Logout
              </NavLink>
            </li>
            
          )}
            <li>
                <FontAwesomeIcon icon={faBell} className="text-gray-500 text-lg hover:text-blue-500 cursor-pointer" />
            </li>
        </>
      );      
  
      return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Logo} className="h-8" alt="Travlo Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Travlo</span>
                    </a>
                    <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {navlinks}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;