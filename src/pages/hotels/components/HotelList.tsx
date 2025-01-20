import { useState } from 'react'
import HotelDetail from './HotelDetail';

const HotelList = () => {
  const [hotelList] = useState([1, 2, 3, 4, 5, 6]);
  
  return (
    <div className="">
      {hotelList.map((hotel) => {
        return <HotelDetail key={hotel} />;
      })}
    </div>
  );
};

export default HotelList;
