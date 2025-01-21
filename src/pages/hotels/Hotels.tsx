import { RiHotelLine } from "react-icons/ri";
import HotelList from "./components/HotelList";
const Hotels = () => {
  return (
    <div className="bg-gray-700 p-5 rounded-md">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 font-semibold text-white">
          <RiHotelLine />
          <span>Hotels</span>
        </h3>
        <button
          type="button"
          className="rounded-md bg-white text-gray-700 px-4 py-2 font-semibold"
        >
          Add Hotels
        </button>
      </div>
      <HotelList />
    </div>
  );
};

export default Hotels;
