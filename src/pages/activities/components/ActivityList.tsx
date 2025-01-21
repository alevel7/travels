import { useState } from "react";
import noActivity from "../../../assets/no-activity.svg";
import ActivityDetail from "./ActivityDetail";

const ActivityList = () => {
  const [flightList] = useState([]);

  return (
    <div className="">
      {flightList.length === 0 && (
        <div className="flex flex-col gap-2 items-center justify-center h-80 bg-white">
          <img src={noActivity} alt="" />
          <p>No Activity yet</p>
          <button className="bg-primaryBg text-white px-4 py-2 rounded hover:opacity-[.5]">
            Add Activity
          </button>
        </div>
      )}
      {flightList.map((flt) => {
        return <ActivityDetail key={flt} />;
      })}
    </div>
  );
};

export default ActivityList;
