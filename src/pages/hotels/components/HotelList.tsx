import { useState } from 'react'
import HotelDetail from './HotelDetail';
import noHotel from "../../../assets/no-hotel.svg"
const HotelList = () => {
  const [hotelList] = useState([]);
  
  return (
    <div className="">
      {hotelList.length === 0 && (
        <div className="flex flex-col gap-2 items-center justify-center h-80 bg-white">
          <img src={noHotel} alt="" />
          <p>No request yet</p>
          <button className="bg-primaryBg text-white px-4 py-2 rounded hover:opacity-[.5]">
            Add Hotel
          </button>
        </div>
      )}
      {hotelList.map((hotel) => {
        return <HotelDetail key={hotel} />;
      })}
    </div>
  );
};

export default HotelList;
