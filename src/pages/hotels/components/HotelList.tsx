import { useState } from 'react';
import HotelDetail from './HotelDetail';
import noHotel from "../../../assets/no-hotel.svg";
import { Button, Modal } from "flowbite-react";
import AddHotel from './AddHotel';
import { useItineraryStore } from '../../../store/store';

const HotelList = () => {
  const hotelList = useItineraryStore((state) => state.hotels);
  const [openModal, setOpenModal] = useState(false);
  
  return (
    <div className="">
      {hotelList.length === 0 && (
        <div className="flex flex-col gap-2 items-center justify-center h-80 bg-white">
          <img src={noHotel} alt="" />
          <p>No request yet</p>
          <button
            onClick={() => setOpenModal(true)}
            className="bg-primaryBg text-white px-4 py-2 rounded hover:opacity-[.5]"
          >
            Add Hotel
          </button>
        </div>
      )}
      {hotelList.map((hotel) => {
        return (
          <HotelDetail key={hotel.hotel_id} actionType="remove" hotel={hotel} />
        );
      })}
      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        size="7xl"
      >
        <AddHotel />
        <Button color="gray" onClick={() => setOpenModal(false)}>
          close
        </Button>
      </Modal>
    </div>
  );
};

export default HotelList;
