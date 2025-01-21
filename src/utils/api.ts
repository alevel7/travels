import axios from "axios";

export const baseURL = "https://booking-com15.p.rapidapi.com/api/v1/";


export const api = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
        "x-rapidapi-key": "6a95c39563msh09729d39aceb55fp19aa2cjsn33dec51ff002",
        "x-rapidapi-host":"booking-com15.p.rapidapi.com"
    }
});


