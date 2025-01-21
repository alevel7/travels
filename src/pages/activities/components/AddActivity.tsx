import React, { useState } from "react";
import {
  useFetchActivities,
  useFetchActivitiesDestinations,
} from "../../../services/useAcitivityHandler";
import {
  ActivityDestination,
  ActivityProduct,
  IActivityPayload,
} from "../../../models/activityModels";
import ActivityDetail from "./ActivityDetail";

const AddActivity = () => {
  const [query, setQuery] = useState("");
  const [params, setParams] = useState<IActivityPayload>(
    {} as IActivityPayload
  );
  const [isListShow, setIsListShow] = useState(false);

  const searchRef = React.createRef<HTMLInputElement>();
  const result = useFetchActivitiesDestinations(query);
  const activitiesResult = useFetchActivities(params);

  const searchLocaton = () => {
    const q = searchRef.current?.value;
    if (q) {
      setIsListShow(true);
      setQuery(q);
    }
  };
  const fetchActivities = (d: ActivityDestination) => {
    setIsListShow(false);
    const getHotelQuery: IActivityPayload = {
      id: d.id,
    };
    setParams((prev) => ({ ...prev, ...getHotelQuery }));
  };
  console.log("rerendering");
  return (
    <div className="p-5">
      <div className="relative">
        <div className="flex items-center w-full gap-3">
          <input
            onInput={(e) => {
              if (e.currentTarget.value === "") {
                setIsListShow(false);
              }
            }}
            ref={searchRef}
            type="text"
            placeholder="Type the location where you wish to check their attractions"
            id="searchInput"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            className="bg-primaryBg text-white px-4 py-2 rounded hover:opacity-[.5] disabled:opacity-[.5]"
            disabled={result.isLoading}
            onClick={() => searchLocaton()}
          >
            Search
          </button>
        </div>

        <ul
          id="autocompleteList"
          className="dropdown absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-10 max-h-40 overflow-y-auto"
        >
          {result.data &&
            isListShow &&
            result.data.map((d: ActivityDestination) => {
              return (
                <li
                  key={d.id}
                  className="p-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3"
                  onClick={() => fetchActivities(d)}
                >
                  <div className="w-full flex items-center justify-between">
                    <span className="font-semibold">{d.cityName}</span>{" "}
                    <span>{d.country}</span>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>

      {/* displays once a destination has been selected */}
      <div className="mt-5">
        <section className="mt-2 h-72 overflow-y-scroll">
          {activitiesResult?.data &&
            activitiesResult.data?.map((activity: ActivityProduct) => {
              return (
                <div className="shadow-lg" key={activity.id}>
                  <ActivityDetail actionType="add" activity={activity} />
                </div>
              );
            })}
        </section>
      </div>
    </div>
  );
};

export default AddActivity;
