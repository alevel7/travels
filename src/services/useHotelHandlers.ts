// import { api } from "../utils/api";
import axios from "axios";
import {
    keepPreviousData,
    useQuery,
} from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ApiReponse } from "../utils/types";
import { Destination, HotelResponse, IHotelPayload } from "../models/hotelModels";

const getDestinations = async (query: string) => {
    console.log(query)
    try {
        // Due to the request limit of 100 per day enforced by rapid api , i downloaded a sample response and used it instead
        // hence, same data get returned not matter the search
        const res = await axios.get<ApiReponse<Destination[]>>('destinations.json');
        return res.data.data;
    } catch (error) {
        console.log(error);
        toast.error("Error Fetching destinations");
    }
};

export const useFetchDestinations = (query: string) => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["destinations", query],
        queryFn: () => getDestinations(query),
        enabled: !!query,
        refetchOnWindowFocus: false,
        placeholderData: keepPreviousData,
    });
    return {
        data,
        isLoading,
        isError,
        error,
    };
};


const getDestinationHotels = async (
    dest_id: number, 
    search_type: string, 
    arrival_date: string, 
    departure_date: string, 
    adults = "1", 
    children_age = '0,17', 
    room_qty="1", 
    page_number="1",
    units='metric',
    temperature_unit="c",
    languagecode ="en-us",
    currency_code ="AED"
) => {
    console.log({
        dest_id,
        search_type,
        arrival_date,
        departure_date,
        adults,
        children_age,
        room_qty,
        page_number,
        units,
        temperature_unit,
        languagecode,
        currency_code
    })
    try {
        const res = await axios.get<ApiReponse<HotelResponse>>('hotels.json');
        return res.data.data;
    } catch (error) {
        console.log(error);
        toast.error("Error Fetching destination Hotels");
    }
};

export const useFetchDestinationHotels = ({
    dest_id,
    search_type,
    arrival_date,
    departure_date,
}: IHotelPayload) => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["destinations", dest_id, search_type, arrival_date, departure_date],
        queryFn: () => getDestinationHotels(dest_id, search_type, arrival_date, departure_date),
        enabled: !!dest_id && !!search_type && !!arrival_date && !!departure_date,
        refetchOnWindowFocus: false,
        placeholderData: keepPreviousData,
    });
    return {
        data,
        isLoading,
        isError,
        error,
    };
};