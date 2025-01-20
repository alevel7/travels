import React from "react";
import { NavLink } from "react-router-dom";
import { GiRoad } from "react-icons/gi";
import { RiHotelLine } from "react-icons/ri";
import { LuPlane } from "react-icons/lu";
import { RiGraduationCapLine } from "react-icons/ri";
import { GrVisa } from "react-icons/gr";
import { PiToolbox } from "react-icons/pi";
import { RiFirstAidKitLine } from "react-icons/ri";
import { GoPackage } from "react-icons/go";
import { BsChevronExpand } from "react-icons/bs";

const SideNav = () => {
  const navClasses = "flex w-full h-full gap-3 p-3 justify-start items-center cursor-pointer text-gray-500 hover:text-gray-800";
  return (
    <div className="p-5 bg-white w-1/6 min-w-[250px] max-h-min">
      <ul className="flex flex-col gap-4">
        <li className="hover:bg-gray-100 has-[.active]:bg-gray-300">
          <NavLink
            to="/activities"
            className={({ isActive }) =>
              [isActive ? "active" : "", navClasses].join(" ")
            }
          >
            <GiRoad />
            <span>Activities</span>
          </NavLink>
        </li>

        <li className="hover:bg-gray-100 has-[.active]:bg-gray-300">
          <NavLink
            to="/hotels"
            className={({ isActive }) =>
              [isActive ? "active" : "", navClasses].join(" ")
            }
          >
            <RiHotelLine />
            <span>Hotels</span>
          </NavLink>
        </li>

        <li className="hover:bg-gray-100 has-[.active]:bg-gray-300">
          <NavLink
            to="/flights"
            className={({ isActive }) =>
              [isActive ? "active" : "", navClasses].join(" ")
            }
          >
            <LuPlane />
            <span>Flights</span>
          </NavLink>
        </li>

        <li className="hover:bg-gray-100 has-[.active]:bg-gray-300">
          <NavLink
            to="/study"
            className={({ isActive }) =>
              [isActive ? "active" : "", navClasses].join(" ")
            }
          >
            <RiGraduationCapLine />
            <span>Study</span>
          </NavLink>
        </li>

        <li className="hover:bg-gray-100 has-[.active]:bg-gray-300">
          <NavLink
            to="/visa"
            className={({ isActive }) =>
              [isActive ? "active" : "", navClasses].join(" ")
            }
          >
            <GrVisa />
            <span>Visa</span>
          </NavLink>
        </li>

        <li className="hover:bg-gray-100 has-[.active]:bg-gray-300">
          <NavLink
            to="/immigration"
            className={({ isActive }) =>
              [isActive ? "active" : "", navClasses].join(" ")
            }
          >
            <PiToolbox />
            <span>Immigration</span>
          </NavLink>
        </li>

        <li className="hover:bg-gray-100 has-[.active]:bg-gray-300">
          <NavLink
            to="/medical"
            className={({ isActive }) =>
              [isActive ? "active" : "", navClasses].join(" ")
            }
          >
            <RiFirstAidKitLine />
            <span>Medical</span>
          </NavLink>
        </li>

        <li className="hover:bg-gray-100 has-[.active]:bg-gray-300">
          <NavLink
            to="/vacation"
            className={({ isActive }) =>
              [isActive ? "active" : "", navClasses].join(" ")
            }
          >
            <GoPackage />
            <span>Vacation Packages</span>
          </NavLink>
        </li>
      </ul>

      <div className="mt-10 flex items-center gap-1">
        <button className="bg-primaryBg text-white px-4 py-2 rounded hover:opacity-[.5]">
          Go
        </button>
        <span className="text-gray-500 text-xs ">Personal Account</span>

        <BsChevronExpand />
      </div>
    </div>
  );
};

export default SideNav;
