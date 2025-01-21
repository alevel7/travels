import ActivityList from "./components/ActivityList";
import { GiRoad } from "react-icons/gi";
const Activity = () => {
  return (
    <div className="p-5 rounded-md bg-primary">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 font-semibold text-white">
          <GiRoad />
          <span>Activities</span>
        </h3>
        <button
          type="button"
          className="rounded-md bg-white text-primary px-4 py-2 font-semibold"
        >
          Add Activity
        </button>
      </div>

      <ActivityList />
    </div>
  );
}

export default Activity
