import React, { useState } from "react";
import { FiMenu, FiHome, FiMessageCircle,FiBell,FiLogOut } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const SideNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const loc = useLocation();

  return (
    <div className="flex">
      <div
        className={`w-64 text-black flex flex-col justify-between transition-transform duration-300 ease-in-out`}
      >
      {console.log(loc.pathname)}
        <div className="p-4">
          <img src="../images/insta.png" className="w-full"/>
          <nav className="mt-6">
            <ul>
              <Link to={"/"} className={`flex items-center mb-4 rounded-lg py-2 px-4 cursor-pointer hover:bg-gray-200 ${loc.pathname === "/" ? "bg-gray-200 font-medium" : ""}`}>
                <FiHome className="mr-2" />
                <h6>Home</h6>
              </Link>
              <Link to={"/search"} className={`flex items-center mb-4 rounded-lg py-2 px-4 cursor-pointer hover:bg-gray-200 ${loc.pathname === "/search" ? "bg-gray-200 font-medium" : ""}`}>
                <FiMessageCircle className="mr-2" />
                <h6>Search</h6>
              </Link>
              <Link to={"/explore"} className={`flex items-center mb-4 rounded-lg py-2 px-4 cursor-pointer hover:bg-gray-200 ${loc.pathname === "/explore" ? "bg-gray-200 font-medium" : ""}`}>
                <FiMessageCircle className="mr-2" />
                <h6>Explore</h6>
              </Link>
              <Link to={"/reels"} className={`flex items-center mb-4 rounded-lg py-2 px-4 cursor-pointer hover:bg-gray-200 ${loc.pathname === "/reels" ? "bg-gray-200 font-medium" : ""}`}>
                <FiMessageCircle className="mr-2" />
                <h6>Reels</h6>
              </Link>
              <Link to={"/messages"} className={`flex items-center mb-4 rounded-lg py-2 px-4 cursor-pointer hover:bg-gray-200 ${loc.pathname === "/messages" ? "bg-gray-200 font-medium" : ""}`}>
                <FiMessageCircle className="mr-2" />
                <h6>Messages</h6>
              </Link>
              <Link to={"/notifications"} className={`flex items-center mb-4 rounded-lg py-2 px-4 cursor-pointer hover:bg-gray-200 ${loc.pathname === "/notifications" ? "bg-gray-200 font-medium" : ""}`}>
                <FiBell className="mr-2" />
                <h6>Notifications</h6>
              </Link>
              <Link to={"/create"} className={`flex items-center mb-4 rounded-lg py-2 px-4 cursor-pointer hover:bg-gray-200 ${loc.pathname === "/create" ? "bg-gray-200 font-medium" : ""}`}>
                <FiMessageCircle className="mr-2" />
                <h6>Create</h6>
              </Link>
              <Link to={"/profile"} className={`flex items-center mb-4 rounded-lg py-2 px-4 cursor-pointer hover:bg-gray-200 ${loc.pathname === "/profile" ? "bg-gray-200 font-medium" : ""}`}>
                <FiMessageCircle className="mr-2" />
                <h6>Profile</h6>
              </Link>
            </ul>
          </nav>
        </div>
        <div className="p-4">
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