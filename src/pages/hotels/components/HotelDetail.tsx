import { IoCloseSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { PiSwimmingPoolBold } from "react-icons/pi";
import { MdLocalBar } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import { FaBed } from "react-icons/fa";

const HotelDetail = () => {
  return (
    <div className="flex mt-3">
      <div className="w-full flex items-center bg-white py-5 pl-5 rounded-tl-md rounded-bl-md">
        <img
          className="size-44 rounded-md"
          src="https://images.unsplash.com/photo-1563340284-cadcc9976727?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww"
          alt=""
        />
        <div className="w-full">
          <section className="p-3">
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold mb-1">Riviera Resort, Lekki</h3>
                <p className="text-xs font-normal">
                  18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way,
                </p>
                <p className="text-xs font-normal">Lekki Phase1</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">N123,450.00</h3>
                <p className="text-xs font-normal">Total Price: NGN 560,000</p>
                <p className="text-xs font-normal">1 room x 10 nights incl. taxes</p>
              </div>
            </div>
            <div className="flex items-center text-xs mt-3">
              <HiOutlineLocationMarker  className="text-primary"/>
              <span className="text-primary mr-2">Show in map</span>
              <FaStar className="text-orange-300"/>
              <span className="mr-2">8.5 (436)</span>
              <FaBed />
              <span className="text-gray-500">King size bedroom</span>
            </div>
          </section>

          <section className="p-3 flex justify-between items-center text-gray-500 border-t border-b border-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <span>Facilities: </span>
              <PiSwimmingPoolBold />
              <span>Pool </span>
              <MdLocalBar />
              <span>Bar </span>
            </div>
            <div className="flex items-center gap-2">
              <SlCalender />
              <span>Check In: 20-12-2024</span>
              <SlCalender />
              <span>Check Out: 20-12-2024</span>
            </div>
          </section>
          <section className="flex items-center justify-between p-3 text-primary text-sm font-medium">
            <div className="flex items-center gap-3">
              <a href="">Hotel Details</a>
              <a href="">Price Details</a>
            </div>
            <a href="">Edit Details</a>
          </section>
        </div>
      </div>
      <button className="min-w-min px-1 bg-red-200">
        <IoCloseSharp />
      </button>
    </div>
  );
};

export default HotelDetail;
