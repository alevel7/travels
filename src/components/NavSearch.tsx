import React from "react";
import logo from "../assets/logo.svg";
import { LuSearch } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const NavSearch = () => {
  return (
    <div className="flex items-center gap-4 content-center">
      <NavLink to="/">
        <img src={logo} alt="logo" className="size-12 cursor-pointer" />
      </NavLink>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <LuSearch className="text-gray-400" />
        </div>
        <input
          type="search"
          id="email-address-icon"
          className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default NavSearch;
