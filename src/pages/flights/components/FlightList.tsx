import { useState } from 'react'
import FlightDetail from './FlightDetail';
import noFlight from "../../../assets/plane.svg"
import { Button, Modal } from "flowbite-react";
import AddFlight from './AddFlight';
import { useItineraryStore } from '../../../store/store';

const FlightList = () => {
    const flightList = useItineraryStore((state) => state.flights);
    const [openModal, setOpenModal] = useState(false);
    
  return (
    <div className="">
      {flightList.length === 0 && (
        <div className="flex flex-col gap-2 items-center justify-center h-80 bg-white">
          <img src={noFlight} alt="" />
          <p>No request yet</p>
          <button
            onClick={() => setOpenModal(true)}
            className="bg-primaryBg text-white px-4 py-2 rounded hover:opacity-[.5]"
          >
            Add flight
          </button>
        </div>
      )}
      {flightList.map((flt) => {
        return (
          <FlightDetail
            key={flt.offerKeyToHighlight}
            actionType="remove"
            flight={flt}
          />
        );
      })}
      <Modal show={openModal} onClose={() => setOpenModal(false)} size="7xl">
        <AddFlight />
        <Button color="gray" onClick={() => setOpenModal(false)}>
          close
        </Button>
      </Modal>
    </div>
  );
}

export default FlightList
