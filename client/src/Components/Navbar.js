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
        className={`h-screen bg-purple-500 w-64 text-white flex flex-col justify-between ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">My App</h1>
          <nav>
            <ul>
              <li className="flex items-center mb-4">
                <FiHome className="mr-2" />
                <Link to={"/"}>Home</Link>
              </li>
              <li className="flex items-center mb-4">
                <FiMessageCircle className="mr-2" />
                <Link to={"/chat"}>Chat</Link>
              </li>
              <li className="flex items-center mb-4">
                <FiUser className="mr-2" />
                <Link to={"/profile"}>My Profile</Link>
              </li>
              <li className="flex items-center mb-4">
                <FiTrash2 className="mr-2" />
                <Link to={"/remove"}>Remove Member</Link>
              </li>
              <li className="flex items-center mb-4">
                <FiEdit2 className="mr-2" />
                <Link to={"/edit"}>Edit App Info</Link>
              </li>
              <li className="flex items-center mb-4">
                <FiDelete className="mr-2" />
                <Link to={"/delete"}>Delete Account</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="p-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg font-bold w-full">
            Logout
          </button>
        </div>
      </div>
      <div
        className={`bg-blue-500 w-16 h-16 flex items-center justify-center text-white cursor-pointer ${
          isNavOpen ? "absolute top-0 right-0" : "fixed top-0 left-0"
        }`}
        onClick={handleToggleNav}
      >
        <FiMenu />
      </div>
    </div>
  );
};

export default SideNavbar;