// import { api } from "../utils/api";
import axios from "axios";
import {
    keepPreviousData,
    useQuery,
} from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ApiReponse } from "../utils/types";
import { Activity, ActivityDestinationReponse, IActivityPayload } from "../models/activityModels";

const fetchDestinationsForActivities = async (query: string) => {
    console.log(query)
    try {
        // Due to the request limit of 100 per day enforced by rapid api , i downloaded a sample response and used it instead
        // hence, same data get returned not matter the search
        const res = await axios.get<ApiReponse<ActivityDestinationReponse>>('activitiesDestinations.json');
        return res.data.data.destinations;
    } catch (error) {
        console.log(error);
        toast.error("Error Fetching destinations");
    }
};

export const useFetchActivitiesDestinations = (query: string) => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["activitiesDestinations", query],
        queryFn: () => fetchDestinationsForActivities(query),
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


const getActivities = async (
    id: string,
    sortBy = 'trending',
    page= '1',
    currency_code= 'INR',
    languagecode= 'en-us'
) => {
    console.log({
        id,
        sortBy,
        page,
        languagecode,
        currency_code
    })
    try {
        const res = await axios.get<ApiReponse<Activity>>('activities.json');
        return res.data.data.products;
    } catch (error) {
        console.log(error);
        toast.error("Error Fetching destination flights");
    }
};

export const useFetchActivities = ({ id }: IActivityPayload) => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["activities", id],
        queryFn: () => getActivities(id),
        enabled: !!id,
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