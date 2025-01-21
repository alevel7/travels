import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useFetchDestinationHotels,
  useFetchDestinations,
} from "../../../services/useHotelHandlers";
import HotelDetail from "./HotelDetail";
import { Datepicker } from "flowbite-react";
import { Label } from "flowbite-react";
import { IHotelPayload, Destination, Hotel } from "../../../models/hotelModels";

type Inputs = {
  arrival_date: string;
  departure_date: string;
};

const AddHotel = () => {
  const [query, setQuery] = useState("");
  const [params, setParams] = useState<IHotelPayload>({} as IHotelPayload);
  const [isListShow, setIsListShow] = useState(false);

  const searchRef = React.createRef<HTMLInputElement>();
  const result = useFetchDestinations(query);
  const hotelResult = useFetchDestinationHotels(params);
  

  const {
    setValue,
    getValues,
    watch,
  } = useForm<Inputs>();


  const searchLocaton = () => {
    const q = searchRef.current?.value;
    if (q) {
      setIsListShow(true);
      setQuery(q);
    }
  };
  const fetchHotels = (d: Destination) => {
    setIsListShow(false);
    const getHotelQuery: IHotelPayload = {
      dest_id: d.dest_id,
      search_type: d.search_type,
      arrival_date: "",
      departure_date: "",
    };
    setParams((prev) => ({ ...prev, ...getHotelQuery }));
  };

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
            placeholder="Type the location where you wish to book hotel"
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
            result.data.map((d: Destination) => {
              return (
                <li
                  key={d.dest_id}
                  className="p-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3"
                  onClick={() => fetchHotels(d)}
                >
                  <img
                    src={d.image_url}
                    alt="country picture"
                    className="size-12"
                  />
                  <div className="w-full">
                    <h3 className="flex items-center justify-between">
                      <span className="font-semibold">{d.name}</span>{" "}
                      <span>{d.country}</span>
                    </h3>
                    <p className="flex items-center justify-between">
                      <span className="font-semibold">{d.label}</span>{" "}
                      <span>{d.city_name}</span>
                    </p>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>

      {/* displays once a destination has been selected */}
      <div className="mt-5">
        {params.dest_id && params.search_type && (
          <form>
            <section className="flex items-center gap-3">
              <div>
                <Label htmlFor="arrival_date" value="Enter arrival date" />
                <Datepicker
                  value={
                    watch("arrival_date")
                      ? new Date(watch("arrival_date"))
                      : new Date()
                  }
                  onChange={(date: Date | null) => {
                    setValue(
                      "arrival_date",
                      date ? date.toISOString().split("T")[0] : ""
                    );
                    setParams((prev) => ({
                      ...prev,
                      arrival_date: getValues("arrival_date"),
                    }));
                  }}
                />
              </div>
              <div>
                <Label htmlFor="departure_date" value="Enter departure date" />
                <Datepicker
                  value={
                    watch("departure_date")
                      ? new Date(watch("departure_date"))
                      : new Date()
                  }
                  onChange={(date: Date | null) => {
                    setValue(
                      "departure_date",
                      date ? date.toISOString().split("T")[0] : ""
                    );
                    setParams((prev) => ({
                      ...prev,
                      departure_date: getValues("departure_date"),
                    }));
                  }}
                />
              </div>
            </section>
          </form>
        )}

        <section className="mt-2 h-72 overflow-y-scroll">
          {hotelResult &&
            hotelResult.data?.hotels?.length &&
            hotelResult.data?.hotels.map((hotel: Hotel) => {
              return <HotelDetail key={hotel.hotel_id} actionType="add" hotel={hotel}/>;
            })}
        </section>
      </div>
    </div>
  );
};

export default AddHotel;
