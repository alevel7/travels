import { LuPlane } from "react-icons/lu";
import FlightList from './components/FlightList';

const Flights = () => {
  return (
    <div className="p-5 rounded-md">
      <div className="flex items-center justify-between">
        <h3 className='flex items-center gap-2 font-semibold'>
          <LuPlane />
          <span>Flights</span>
        </h3>
        <button type="button" className='rounded-md bg-white text-primary px-4 py-2 font-semibold'>Add Flights</button>
      </div>

      <FlightList />
    </div>
  );
}

export default Flights
