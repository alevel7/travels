import React, { useState } from "react";
import {
  FlightDestinationResponse,
  FlightOffer,
  IFlightPayload,
} from "../../../models/flightModels";
import {
  useFetchDestinationFlights,
  useFetchFlightDestinations,
} from "../../../services/useFlightHandlers";
import { useForm } from "react-hook-form";
import { Datepicker, Label } from "flowbite-react";
import FlightDetail from "./FlightDetail";

type Inputs = {
  departDate: string;
  returnDate: string;
};

const AddFlight = () => {
  const [query, setQuery] = useState("");
  const [params, setParams] = useState<IFlightPayload>({} as IFlightPayload);
  const [isListShow, setIsListShow] = useState(false);

  const searchRef = React.createRef<HTMLInputElement>();
  const result = useFetchFlightDestinations(query);
  const flightsResult = useFetchDestinationFlights(params);

  const { setValue, getValues, watch } = useForm<Inputs>();

  const searchLocaton = () => {
    const q = searchRef.current?.value;
    if (q) {
      setIsListShow(true);
      setQuery(q);
    }
  };
  const fetchFlights = (d: FlightDestinationResponse) => {
    setIsListShow(false);
    const getHotelQuery: IFlightPayload = {
      fromId: d.id,
      toId: "SYD.AIRPORT",
      departDate: "",
      returnDate: "",
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
            placeholder="Type the location where you wish to book Flight to"
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
            result.data.map((d: FlightDestinationResponse) => {
              return (
                <li
                  key={d.id}
                  className="p-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3"
                  onClick={() => fetchFlights(d)}
                >
                  <img
                    src={d.photoUri}
                    alt="country picture"
                    className="size-12"
                  />
                  <div className="w-full">
                    <h3 className="flex items-center justify-between">
                      <span className="font-semibold">{d.name}</span>{" "}
                      <span>{d.countryName}</span>
                    </h3>
                    <p className="flex items-center justify-between">
                      <span className="font-semibold">{d.regionName}</span>{" "}
                      <span>{d.cityName}</span>
                    </p>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>

      {/* displays once a destination has been selected */}
      <div className="mt-5">
        {params.fromId && params.toId && (
          <form>
            <section className="flex items-center gap-3">
              <div>
                <Label htmlFor="departDate" value="Enter depart date" />
                <Datepicker
                  value={
                    watch("departDate")
                      ? new Date(watch("departDate"))
                      : new Date()
                  }
                  onChange={(date: Date | null) => {
                    setValue(
                      "departDate",
                      date ? date.toISOString().split("T")[0] : ""
                    );
                    setParams((prev) => ({
                      ...prev,
                      departDate: getValues("departDate"),
                    }));
                  }}
                />
              </div>
              <div>
                <Label htmlFor="returnDate" value="Enter return date" />
                <Datepicker
                  value={
                    watch("returnDate")
                      ? new Date(watch("returnDate"))
                      : new Date()
                  }
                  onChange={(date: Date | null) => {
                    setValue(
                      "returnDate",
                      date ? date.toISOString().split("T")[0] : ""
                    );
                    setParams((prev) => ({
                      ...prev,
                      returnDate: getValues("returnDate"),
                    }));
                  }}
                />
              </div>
            </section>
          </form>
        )}

        <section className="mt-2 h-72 overflow-y-scroll">
          {flightsResult?.data &&
            flightsResult.data?.flightOffers.map((flight: FlightOffer) => {
              return (
                <div className="shadow-lg" key={flight.offerKeyToHighlight}>
                  <FlightDetail actionType="add" flight={flight} />
                </div>
              );
            })}
        </section>
      </div>
    </div>
  );
};

export default AddFlight;
