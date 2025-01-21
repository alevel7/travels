import { RiHotelLine } from "react-icons/ri";
import HotelList from "./components/HotelList";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import AddHotel from "./components/AddHotel";
import { useItineraryStore } from "../../store/store";
const Hotels = () => {
  const [openModal, setOpenModal] = useState(false);
  const hotels = useItineraryStore((state) => state.hotels);
  return (
    <div className="bg-gray-700 p-5 rounded-md">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 font-semibold text-white">
          <RiHotelLine />
          <span>Hotels</span>
        </h3>
        {hotels.length > 0 && (
          <button
            onClick={() => setOpenModal(true)}
            type="button"
            className="rounded-md bg-white text-gray-700 px-4 py-2 font-semibold"
          >
            Add Hotels
          </button>
        )}
      </div>
      <HotelList />
      <Modal show={openModal} onClose={() => setOpenModal(false)} size="7xl">
        <AddHotel />
        <Button color="gray" onClick={() => setOpenModal(false)}>
          close
        </Button>
      </Modal>
    </div>
  );
};

export default Hotels;
