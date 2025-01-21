import ActivityList from "./components/ActivityList";
import { GiRoad } from "react-icons/gi";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import AddActivity from "./components/AddActivity";
import { useItineraryStore } from "../../store/store";

const Activity = () => {
  const [openModal, setOpenModal] = useState(false);
  const activities = useItineraryStore((state) => state.activities);
  return (
    <div className="p-5 rounded-md bg-primary">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 font-semibold text-white">
          <GiRoad />
          <span>Activities</span>
        </h3>
        {activities.length !== 0 && (
          <button
            onClick={() => setOpenModal(true)}
            type="button"
            className="rounded-md bg-white text-primary px-4 py-2 font-semibold"
          >
            Add Activity
          </button>
        )}
      </div>

      <ActivityList />
      <Modal show={openModal} onClose={() => setOpenModal(false)} size="7xl">
        <AddActivity />
        <Button color="gray" onClick={() => setOpenModal(false)}>
          close
        </Button>
      </Modal>
    </div>
  );
}

export default Activity
