import NavSearch from './NavSearch';
import { IoHomeOutline } from "react-icons/io5";
import { FiPieChart } from "react-icons/fi";
import { BsWallet2 } from "react-icons/bs";
import { TbRoad } from "react-icons/tb";
import { LuListTodo } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { RiAddBoxLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

const NavBar = () => {
  return (
    <div className="p-5 flex justify-between items-center">
      <NavSearch />
      <div className="flex">
        <ul className="flex gap-4 pr-5 border-r border-gray-300">
          <li>
            <a className="flex w-full h-full flex-col justify-center items-center cursor-pointer text-gray-500 hover:text-gray-800">
              <IoHomeOutline />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a className="flex w-full h-full flex-col justify-center items-center cursor-pointer text-gray-500 hover:text-gray-800">
              <FiPieChart />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a className="flex w-full h-full flex-col justify-center items-center cursor-pointer text-gray-500 hover:text-gray-800">
              <BsWallet2 />
              <span>Wallet</span>
            </a>
          </li>
          <li>
            <a className="flex w-full h-full flex-col justify-center items-center cursor-pointer text-gray-500 hover:text-gray-800">
              <LuListTodo />
              <span>Plan a trip</span>
            </a>
          </li>
          <li>
            <a className="flex w-full h-full flex-col justify-center items-center cursor-pointer text-gray-500 hover:text-gray-800">
              <TbRoad />
              <span>Commission for life</span>
            </a>
          </li>
        </ul>
        <ul className="flex gap-4 pl-5">
          <li className="flex flex-col justify-center items-center">
            <button className="bg-primaryBg text-white px-4 py-2 rounded hover:opacity-[.5]">
              Subscribe
            </button>
          </li>
          <li>
            <a className="flex w-full h-full flex-col justify-center items-center cursor-pointer text-gray-500 hover:text-gray-800">
              <IoMdNotificationsOutline />
              <span>Notifications</span>
            </a>
          </li>
          <li>
            <a className="flex w-full h-full flex-col justify-center items-center cursor-pointer text-gray-500 hover:text-gray-800">
              <IoCartOutline />
              <span>Carts</span>
            </a>
          </li>
          <li>
            <a className="flex w-full h-full flex-col justify-center items-center cursor-pointer text-gray-500 hover:text-gray-800">
              <RiAddBoxLine />
              <span>Create</span>
            </a>
          </li>
          <li className="flex gap-2 justify-center items-center">
            <img
              className="size-10 rounded-full"
              src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="user profile picture"
            />
            <IoIosArrowDown />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar
