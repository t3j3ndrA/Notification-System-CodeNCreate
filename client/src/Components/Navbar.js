import React, { useState } from "react";
import { FiMenu, FiHome, FiMessageCircle, FiBell, FiLogOut, FiSearch, FiCompass, FiVideo, FiPlusSquare } from "react-icons/fi";
import { RiMessengerLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";

const SideNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const loc = useLocation();
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="flex order-last md:order-first md:static">
      <div
        className={`md:w-64 md:h-screen md:border-r dark:border-[#262626] dark:border-r-2 bg-white text-black dark:bg-[#000] dark:text-[#fff] flex flex-row md:flex-col justify-between transition-transform duration-300 ease-in-out`}
      >
        <div className="md:p-4 py-2 flex flex-row md:flex-col">
          {theme === 'light' ? <img src="../images/insta.png" className="md:w-full hidden md:block" /> :
            <img src="../images/insta-dark.png" className="md:w-3/4 hidden md:block" />}
          <nav className="md:mt-6">
            <ul className="flex flex-row md:flex-col md:w-full w-screen pr-0 sm:px-6 md:px-0 justify-between items-start">
              <Link to={"/home"} className={`md:w-full flex space-x-2 items-center md:mb-4 rounded-lg py-2 px-2 sm:px-4 cursor-pointer hover:text-[#2d3436] hover:bg-gray-100 font-medium shadow-sm hover:shadow-gray-300 dark:hover:shadow-none dark:hover:bg-[#121212] dark:hover:text-white ${loc.pathname === "/" ? "bg-gray-100 font-medium dark:bg-[#fff] dark:text-black" : ""}`}>
                <FiHome className="text-base sm:text-2xl md:text-base" />
                <h6 className="hidden md:block">Home</h6>
              </Link>
              <Link to={"/search"} className={`md:w-full flex space-x-2 items-center md:mb-4 rounded-lg py-2 px-2 sm:px-4 cursor-pointer hover:text-[#2d3436] hover:bg-gray-100 font-medium shadow-sm hover:shadow-gray-300 dark:hover:shadow-none dark:hover:bg-[#121212] dark:hover:text-white ${loc.pathname === "/search" ? "bg-gray-100 font-medium dark:bg-[#fff] dark:text-black" : ""}`}>
                <FiSearch className="text-base sm:text-2xl md:text-base" />
                <h6 className="hidden md:block">Search</h6>
              </Link>
              <Link to={"/explore"} className={`md:w-full flex space-x-2 items-center md:mb-4 rounded-lg py-2 px-2 sm:px-4 cursor-pointer hover:text-[#2d3436] hover:bg-gray-100 font-medium shadow-sm hover:shadow-gray-300 dark:hover:shadow-none dark:hover:bg-[#121212] dark:hover:text-white ${loc.pathname === "/explore" ? "bg-gray-100 font-medium dark:bg-[#fff] dark:text-black" : ""}`}>
                <FiCompass className="text-base sm:text-2xl md:text-base" />
                <h6 className="hidden md:block">Explore</h6>
              </Link>
              <Link to={"/reels"} className={`md:w-full flex space-x-2 items-center md:mb-4 rounded-lg py-2 px-2 sm:px-4 cursor-pointer hover:text-[#2d3436] hover:bg-gray-100 font-medium shadow-sm hover:shadow-gray-300 dark:hover:shadow-none dark:hover:bg-[#121212] dark:hover:text-white ${loc.pathname === "/reels" ? "bg-gray-100 font-medium dark:bg-[#fff] dark:text-black" : ""}`}>
                <FiVideo className="text-base sm:text-2xl md:text-base" />
                <h6 className="hidden md:block">Reels</h6>
              </Link>
              <Link to={"/messages"} className={`md:w-full flex space-x-2 items-center md:mb-4 rounded-lg py-2 px-2 sm:px-4 cursor-pointer hover:text-[#2d3436] hover:bg-gray-100 font-medium shadow-sm hover:shadow-gray-300 dark:hover:shadow-none dark:hover:bg-[#121212] dark:hover:text-white ${loc.pathname === "/messages" ? "bg-gray-100 font-medium dark:bg-[#fff] dark:text-black" : ""}`}>
                <RiMessengerLine className="text-base sm:text-2xl md:text-base" />
                <h6 className="hidden md:block">Messages</h6>
              </Link>
              <Link to={"/notifications"} className={`md:w-full flex space-x-2 items-center md:mb-4 rounded-lg py-2 px-2 sm:px-4 cursor-pointer hover:text-[#2d3436] hover:bg-gray-100 font-medium shadow-sm hover:shadow-gray-300 dark:hover:shadow-none dark:hover:bg-[#121212] dark:hover:text-white  ${loc.pathname === "/notifications" ? "bg-gray-100 font-medium dark:bg-[#fff] dark:text-black dark:bg-[#fff] dark:text-black" : ""}`}>
                <FiBell className="text-base sm:text-2xl md:text-base" />
                <h6 className="hidden md:block">Notifications</h6>
              </Link>
              <Link to={"/create"} className={`md:w-full flex space-x-2 items-center md:mb-4 rounded-lg py-2 px-2 sm:px-4 cursor-pointer hover:text-[#2d3436] hover:bg-gray-100 font-medium shadow-sm hover:shadow-gray-300 dark:hover:shadow-none dark:hover:bg-[#121212] dark:hover:text-white ${loc.pathname === "/create" ? "bg-gray-100 font-medium dark:bg-[#fff] dark:text-black" : ""}`}>
                <FiPlusSquare className="text-base sm:text-2xl md:text-base" />
                <h6 className="hidden md:block">Create</h6>
              </Link>
              <Link to={"/profile"} className={`md:w-full hidden sm:flex space-x-2 items-center md:mb-4 rounded-lg py-2 px-4 cursor-pointer hover:text-[#2d3436] hover:bg-gray-100 font-medium shadow-sm hover:shadow-gray-300 dark:hover:shadow-none dark:hover:bg-[#121212] dark:hover:text-white ${loc.pathname === "/profile" ? "bg-gray-100 font-medium dark:bg-[#fff] dark:text-black" : ""}`}>
                <img src="../images/avatar.jpg" className="h-10 w-10 rounded-full " />
                <h6 className="hidden md:block">Profile</h6>
              </Link>
            </ul>
          </nav>
        </div>
        <div className="p-4 w-full md:block hidden">
          <button className="bg-blue-500 hover:bg-blue-600 flex justify-center duration-200 items-center text-white py-2 px-4 rounded-lg font-bold w-full dark:bg-[#262626] dark:hover:bg-[#2d3436]">
            Logout<FiLogOut className="ml-2" />
          </button>
        </div>
      </div>
      {/* <div
        className={`bg-blue-500 w-16 h-16 flex items-center justify-center text-white cursor-pointer`}
        onClick={handleToggleNav}
      >
        <FiMenu />
      </div> */}
    </div>
  );
};

export default SideNavbar;