import React, { useState } from "react";
import { FiMenu, FiHome, FiMessageCircle,FiBell,FiLogOut, FiSearch, FiCompass, FiVideo, FiPlusSquare } from "react-icons/fi";
import { RiMessengerLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const SideNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const loc = useLocation();

  return (
    <div className="flex order-last md:order-first  md:static">
      <div
        className={`md:w-64 md:h-screen md:border-r border-t bg-white text-black flex flex-row md:flex-col items-center justify-between transition-transform duration-300 ease-in-out`}
      >
        <div className="md:p-4 py-2 flex flex-row md:flex-col">
          <img src="../images/insta.png" className="md:w-full hidden md:block"/>
          <nav className="md:mt-6">
            <ul className="flex flex-row md:flex-col md:w-full w-screen pr-0 sm:px-6 md:pr-0 justify-between">
              <Link to={"/"} className={`flex space-x-2 items-center md:mb-4 rounded-lg py-2 px-2 sm:px-4 cursor-pointer hover:bg-gray-200 ${loc.pathname === "/" ? "bg-gray-200 font-medium" : ""}`}>
                <FiHome className="text-base sm:text-2xl md:text-base"/>
                <h6 className="hidden md:block">Home</h6>
              </Link>
              <Link to={"/search"} className={`flex space-x-2 items-center md:mb-4 rounded-lg py-2 px-2 sm:px-4 cursor-pointer hover:bg-gray-200 ${loc.pathname === "/search" ? "bg-gray-200 font-medium" : ""}`}>
                <FiSearch className="text-base sm:text-2xl md:text-base"/>
                <h6 className="hidden md:block">Search</h6>
              </Link>
              <Link to={"/explore"} className={`flex space-x-2 items-center md:mb-4 rounded-lg py-2 px-2 sm:px-4 cursor-pointer hover:bg-gray-200 ${loc.pathname === "/explore" ? "bg-gray-200 font-medium" : ""}`}>
                <FiCompass className="text-base sm:text-2xl md:text-base"/>
                <h6 className="hidden md:block">Explore</h6>
              </Link>
              <Link to={"/reels"} className={`flex space-x-2 items-center md:mb-4 rounded-lg py-2 px-2 sm:px-4 cursor-pointer hover:bg-gray-200 ${loc.pathname === "/reels" ? "bg-gray-200 font-medium" : ""}`}>
                <FiVideo className="text-base sm:text-2xl md:text-base"/>
                <h6 className="hidden md:block">Reels</h6>
              </Link>
              <Link to={"/messages"} className={`flex space-x-2 items-center md:mb-4 rounded-lg py-2 px-2 sm:px-4 cursor-pointer hover:bg-gray-200 ${loc.pathname === "/messages" ? "bg-gray-200 font-medium" : ""}`}>
                <RiMessengerLine className="text-base sm:text-2xl md:text-base"/>
                <h6 className="hidden md:block">Messages</h6>
              </Link>
              <Link to={"/notifications"} className={`flex space-x-2 items-center md:mb-4 rounded-lg py-2 px-2 sm:px-4 cursor-pointer hover:bg-gray-200 ${loc.pathname === "/notifications" ? "bg-gray-200 font-medium" : ""}`}>
                <FiBell className="text-base sm:text-2xl md:text-base"/>
                <h6 className="hidden md:block">Notifications</h6>
              </Link>
              <Link to={"/create"} className={`flex space-x-2 items-center md:mb-4 rounded-lg py-2 px-2 sm:px-4 cursor-pointer hover:bg-gray-200 ${loc.pathname === "/create" ? "bg-gray-200 font-medium" : ""}`}>
                <FiPlusSquare className="text-base sm:text-2xl md:text-base"/>
                <h6 className="hidden md:block">Create</h6>
              </Link>
              <Link to={"/profile"} className={`hidden sm:flex space-x-2 items-center md:mb-4 rounded-lg py-2 px-4 cursor-pointer hover:bg-gray-200 ${loc.pathname === "/profile" ? "bg-gray-200 font-medium" : ""}`}>
                <img src="../images/avatar.jpg" className="h-10 w-10 rounded-full "/>
                <h6 className="hidden md:block">Profile</h6>
              </Link>
            </ul>
          </nav>
        </div>
        <div className="p-4 w-full md:block hidden">
          <button className="bg-blue-500 flex justify-center hover:scale-y-105 duration-200 items-center text-white py-2 px-4 rounded-lg font-bold w-full">
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