import React, { useState } from "react";
import { FiMenu, FiHome, FiMessageCircle, FiUser, FiTrash2, FiEdit2, FiDelete, FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="flex">
      <div
        className={`h-screen w-64 text-black flex flex-col border-r justify-between transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-8 text-pink-400">My Messenger</h1>
          <nav>
            <ul>
              <Link to={"/"} className="flex items-center mb-4 rounded-lg py-2 px-4 cursor-pointer hover:bg-gray-50">
                <FiHome className="mr-2" />
                <h6>Home</h6>
              </Link>
              <Link to={"/chat"} className="flex items-center mb-4 rounded-lg py-2 px-4 cursor-pointer hover:bg-gray-50">
                <FiMessageCircle className="mr-2" />
                <h6>Chat</h6>
              </Link>
              <Link to={"/notifications"} className="flex items-center mb-4 rounded-lg py-2 px-4 cursor-pointer hover:bg-gray-50">
                <FiUser className="mr-2" />
                <h6>Notifications</h6>
              </Link>
            </ul>
          </nav>
        </div>
        <div className="p-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg font-bold w-full">
            Logout
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