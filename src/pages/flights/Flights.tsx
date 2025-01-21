import { LuPlane } from "react-icons/lu";
import FlightList from './components/FlightList';
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import AddFlight from "./components/AddFlight";
import { useItineraryStore } from "../../store/store";

const Flights = () => {
  const [openModal, setOpenModal] = useState(false);
  const flights = useItineraryStore((state) => state.flights);
  return (
    <div className="p-5 rounded-md">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 font-semibold">
          <LuPlane />
          <span>Flights</span>
        </h3>
        {flights.length > 0 && (
          <button
            onClick={() => setOpenModal(true)}
            type="button"
            className="rounded-md bg-white text-primary px-4 py-2 font-semibold"
          >
            Add Flights
          </button>
        )}
      </div>

      <FlightList />
      <Modal show={openModal} onClose={() => setOpenModal(false)} size="7xl">
        <AddFlight />
        <Button color="gray" onClick={() => setOpenModal(false)}>
          close
        </Button>
      </Modal>
    </div>
  );
}

export default Flights
