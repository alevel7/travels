import { create } from "zustand"
import { Hotel } from "../models/hotelModels"
import { FlightOffer } from "../models/flightModels"
import { ActivityProduct } from "../models/activityModels"
import toast from "react-hot-toast";

type ItineraryStore = {
    hotels: Hotel[],
    flights: FlightOffer[],
    activities: ActivityProduct[],

    addHotel: (hotel: Hotel) => void,
    removeHotel: (hotel: Hotel) => void,
    addFlight: (hotel: FlightOffer) => void,
    removeFlight: (hotel: FlightOffer) => void,
    addActivity: (hotel: ActivityProduct) => void,
    removeActivity: (hotel: ActivityProduct) => void,
}

export const useItineraryStore = create<ItineraryStore>((set) => ({
    hotels: [],
    flights: [],
    activities: [],

    addHotel: (hotel:Hotel) => {
        set((state) => {
            toast.success(`${hotel.property.name} added`)
            return ({
                hotels: [...state.hotels, hotel]
            })
        })
    },
    removeHotel: (hotel: Hotel) => {
        set((state) => {
            toast.success(`${hotel.property.name} Removed`)
            return ({
                hotels: state.hotels.filter((h) => h.hotel_id !== hotel.hotel_id)
            })
        })
    },
    addFlight: (flight: FlightOffer) => {
        set((state) => {
            toast.success(`New Flight added`)
            return ({
                flights: [...state.flights, flight]
            })
        })
    },
    removeFlight: (flight: FlightOffer) => {
        set((state) => {
            toast.success("Flight Removed")
            return ({
                flights: state.flights.filter((h) => h.offerKeyToHighlight !== flight.offerKeyToHighlight)
            })
        })
    },
    addActivity: (activities: ActivityProduct) => {
        set((state) => {
            toast.success(`${activities.name} Activity added`)
            return ({
                activities: [...state.activities, activities]
            })
        })
    },
    removeActivity: (activities: ActivityProduct) => {
        set((state) => {
            toast.success(`${activities.name} Removed`)
            return ({
                activities: state.activities.filter((h) => h.id !== activities.id)
            })
        })
    },
}))