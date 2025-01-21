import { PiToolbox } from "react-icons/pi";
import { BiMoviePlay } from "react-icons/bi";
import { MdNoMeals } from "react-icons/md";
import { FaUsb } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { LuPlaneTakeoff } from "react-icons/lu";
import { LuPlaneLanding } from "react-icons/lu";
import './FlightDetail.css';

const FlightDetail = () => {
  return (
    <div className="flex mt-3">
      <div className="w-full bg-white rounded-md">
        <section className="flex items-center p-3 justify-between">
          <div className="flex items-center gap-2 ">
            <img
              className="size-8 rounded-full"
              src="https://plus.unsplash.com/premium_photo-1679758629410-c240e2b7d66a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
              alt=""
            />
            <div className="flex flex-col">
              <h3 className="font-semibold">American airlines</h3>
              <div className="flex items-center gap-3 text-sm">
                <p className="text-gray-500">AA-892</p>
                <span className="bg-primary text-white p-1 rounded-lg">
                  First class
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <section className="flex flex-col">
              <span className="font-semibold">08:35</span>
              <span className="text-gray-600">sun, 20 Aug</span>
            </section>
            <section className="w-48">
              <div className="flex justify-between items-center">
                <LuPlaneTakeoff />
                <span className="text-gray-600">Duration: 1h 45min</span>
                <LuPlaneLanding />
              </div>
              <meter id="disk_d" value="0.6" className="w-full">
                60%
              </meter>
              <div className="flex justify-between items-center">
                <span className="font-semibold">LOS</span>
                <span className="text-gray-600">Direct</span>
                <span className="font-semibold">SIN</span>
              </div>
            </section>
            <section className="flex flex-col">
              <span className="font-semibold">08:35</span>
              <span className="text-gray-600">sun, 20 Aug</span>
            </section>
          </div>
          <div className="font-semibold">N123,000.00</div>
        </section>

        <section className="p-3 border-t border-b border-gray-300">
          <p className="flex items-center text-gray-500">
            <span className="mr-4">Facilities</span>
            <PiToolbox className="text-gray-900" />
            <span>Baggage: 20kg,</span>
            <span className="mr-4">Cabin Baggage: 20kg,</span>
            <BiMoviePlay className="text-gray-900" />
            <span className="mr-4 ml-2">In Flight Entertainment</span>
            <MdNoMeals className="text-gray-900" />
            <span className="mr-4 ml-2">In flight meal</span>
            <FaUsb className="text-gray-900" />
            <span className="ml-2">USB port</span>
          </p>
        </section>

        <section className="flex items-center justify-between p-3 text-primary font-medium">
          <div className="flex items-center gap-3">
            <a href="">Fight Details</a>
            <a href="">Price Details</a>
          </div>
          <a href="">Edit Details</a>
        </section>
      </div>
      <button className="min-w-min px-1 bg-red-200">
        <IoCloseSharp />
      </button>
    </div>
  );
}

export default FlightDetail
