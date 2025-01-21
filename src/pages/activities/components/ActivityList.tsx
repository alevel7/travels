import noActivity from "../../../assets/no-activity.svg";
import ActivityDetail from "./ActivityDetail";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import AddActivity from "./AddActivity";
import { useItineraryStore } from "../../../store/store";

const ActivityList = () => {
  const activityList = useItineraryStore((state) => state.activities);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="">
      {activityList.length === 0 && (
        <div className="flex flex-col gap-2 items-center justify-center h-80 bg-white">
          <img src={noActivity} alt="" />
          <p>No Activity yet</p>
          <button
            onClick={() => setOpenModal(true)}
            className="bg-primaryBg text-white px-4 py-2 rounded hover:opacity-[.5]"
          >
            Add Activity
          </button>
        </div>
      )}
      {activityList.map((activity) => {
        return (
          <ActivityDetail key={activity.id} actionType="remove" activity={activity} />
        );
      })}

      <Modal show={openModal} onClose={() => setOpenModal(false)} size="7xl">
        <AddActivity />
        <Button color="gray" onClick={() => setOpenModal(false)}>
          close
        </Button>
      </Modal>
    </div>
  );
};

export default ActivityList;
