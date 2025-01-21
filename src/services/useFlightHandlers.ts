// import { api } from "../utils/api";
import axios from "axios";
import {
    keepPreviousData,
    useQuery,
} from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ApiReponse} from "../utils/types";
import { FlightDestinationResponse, FlightResponse, IFlightPayload } from "../models/flightModels";

const fetchDestinationsForFlight = async (query: string) => {
    console.log(query)
    try {
        // Due to the request limit of 100 per day enforced by rapid api , i downloaded a sample response and used it instead
        // hence, same data get returned not matter the search
        const res = await axios.get<ApiReponse<FlightDestinationResponse[]>>('flightsDestinations.json');
        return res.data.data;
    } catch (error) {
        console.log(error);
        toast.error("Error Fetching destinations");
    }
};

export const useFetchFlightDestinations = (query: string) => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["destinationOfFlights", query],
        queryFn: () => fetchDestinationsForFlight(query),
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


const getDestinationFlights = async (
    fromId: string,
    toId: string,
    departDate: string,
    returnDate: string,
    adults = "1",
    children_age = '0,17',
    sort = "BEST",
    pageNo = "33",
    cabinClass = 'ECONOMY',
    currency_code = "AED"
) => {
    console.log({
        fromId,
        toId,
        departDate,
        returnDate,
        adults,
        children_age,
        sort,
        pageNo,
        cabinClass,
        currency_code
    })
    try {
        const res = await axios.get<ApiReponse<FlightResponse>>('flights.json');
        return res.data.data;
    } catch (error) {
        console.log(error);
        toast.error("Error Fetching destination flights");
    }
};

export const useFetchDestinationFlights = ({
    fromId,
    toId,
    departDate,
    returnDate,
}: IFlightPayload) => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["destinations", fromId, toId, departDate, returnDate],
        queryFn: () => getDestinationFlights(fromId, toId, departDate, returnDate),
        enabled: !!fromId && !!toId && !!departDate && !!returnDate,
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