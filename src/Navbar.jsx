import React from "react";
import { useState } from "react";
import Switcher from "./Switcher";

const Navbar = () => {

    const [profileOpen, setProfileIsOpen] = useState(false);
    const toggleProfile = () => {
        setProfileIsOpen(!profileOpen);
    };    

  return (
    <div className="flex justify-end p-7 gap-4 -mt-1">
      <i className="bx bx-bell text-3xl h-5 text-gray-900 dark:text-slate-50"></i>
      <Switcher />
      <div className="relative cursor-pointer ml-3 h-5" onClick={toggleProfile}>
        <button
          type="button"
          className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          <span className="sr-only">Open user menu</span>
          <img
            className="h-9 w-9 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </button>

        <div
          className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
            profileOpen ? "" : "hidden"
          }`}
        >
          <a href="#" className="block px-4 py-2 text-sm text-gray-700">
            Your Profile
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700">
            Settings
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700">
            Sign out
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
