import { SlCalender } from "react-icons/sl";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import banner from "../../assets/banner.svg";
import { IoSettingsOutline } from "react-icons/io5";
import Flights from '../flights/Flights';
import Hotels from '../hotels/Hotels';

const Home = () => {
  return (
    <div className="p-5 bg-white">
      <div>
        <img src={banner} alt="" />
      </div>
      <div className="mt-3 flex justify-between">
        <section>
          <p className="bg-[#FEF4E6] text-[#583b13] text-sm p-2 flex items-center gap-1 font-medium">
            <SlCalender />
            <span>21 March 2024</span>
            <IoIosArrowRoundForward />
            <span>21 April 2024</span>
          </p>
          <h3 className="font-semibold mt-2 text-xl">Bahamas Family Trip</h3>
        </section>
        <section className="flex items-center justify-center gap-3">
          <button className="bg-secondary px-10 py-2 rounded hover:opacity-[.5] text-primary ">
            <IoPersonOutline />
          </button>
          <BsThreeDots />
        </section>
      </div>

      <div className="flex justify-between items-center">
        <section className="text-sm text-gray-600">
          <span>New York, United State of America </span>
          <span>Solo Trip</span>
        </section>
        <section className="flex items-center gap-3">
          <img
            className="size-8 rounded-full"
            src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="user profile picture"
          />
          <IoSettingsOutline />
        </section>
      </div>

      <div className="flex items-center gap-2 text-xs">
        <section className="flex flex-col gap-4 p-5 max-w-64 bg-tertiary text-white rounded-lg">
          <h4 className="font-semibold">Activities</h4>
          <p className="text-xs">
            Build, personalize, and optimize your itineraries with our trip
            planner.
          </p>
          <button className="mt-6 bg-primaryBg py-3 rounded-lg">
            Add Activities
          </button>
        </section>

        <section className="flex flex-col gap-4 p-5 max-w-64 bg-secondary text-tertiary rounded-lg">
          <h4 className="font-semibold">Hotels</h4>
          <p className="text-xs">
            Build, personalize, and optimize your itineraries with our trip
            planner.
          </p>
          <button className="mt-6 bg-primaryBg py-3 rounded-lg text-white">
            Add Hotels
          </button>
        </section>

        <section className="flex flex-col gap-4 p-5 max-w-64 bg-primary text-white rounded-lg">
          <h4 className="font-semibold">Flights</h4>
          <p className="text-xs">
            Build, personalize, and optimize your itineraries with our trip
            planner.
          </p>
          <button className="mt-6 bg-white py-3 rounded-lg text-primary">
            Add Flights
          </button>
        </section>
      </div>

      <div className="mt-20 mb-14">
        <h3 className="font-semibold">Trip Iterenaries</h3>
        <small>Your trip itineraries are placed here</small>
      </div>

      <div className="h-[50vh] overflow-y-scroll bg-gray-100">
        <Flights />
      </div>
      <div className="h-[50vh] overflow-y-scroll bg-gray-100 mt-10">
        <Hotels />
      </div>
    </div>
  );
}

export default Home
