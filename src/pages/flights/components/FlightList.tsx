import { useState } from 'react'
import FlightDetail from './FlightDetail';
import noFlight from "../../../assets/plane.svg"

const FlightList = () => {
    const [flightList ] = useState([
        
    ]);
    
  return (
    <div className="">
      {flightList.length === 0 && (
        <div className="flex flex-col gap-2 items-center justify-center h-80 bg-white">
          <img src={noFlight} alt="" />
          <p>No request yet</p>
          <button className="bg-primaryBg text-white px-4 py-2 rounded hover:opacity-[.5]">
            Add flight
          </button>
        </div>
      )}
      {flightList.map((flt) => {
        return <FlightDetail key={flt} />;
      })}
    </div>
  );
}

export default FlightList
