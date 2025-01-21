import { IoCloseSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { PiSwimmingPoolBold } from "react-icons/pi";
import { MdLocalBar } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useItineraryStore } from "../../../store/store";
import { Carousel } from "flowbite-react";
import { Hotel } from "../../../models/hotelModels";

interface HotelDetailProps {
  actionType: "add" | "remove";
  hotel: Hotel;
}
const HotelDetail = ({ actionType, hotel }: HotelDetailProps) => {
  const { addHotel, removeHotel } = useItineraryStore();
  return (
    <div className="flex mt-3">
      <div className="w-full flex items-center bg-white py-5 pl-5 rounded-tl-md rounded-bl-md">
        <Carousel className="w-2/6">
        {
          hotel?.property.photoUrls.map((url) => (
            <img src={url} alt="" />
          ))
        }   
        </Carousel>

        <div className="w-full">
          <section className="p-3">
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold mb-1">{hotel?.property.name}</h3>
                <p className="text-xs font-normal">
                  18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way,
                </p>
                <p className="text-xs font-normal">
                  {hotel?.property.wishlistName}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency:
                      hotel?.property.priceBreakdown.grossPrice.currency,
                  }).format(hotel?.property.priceBreakdown.grossPrice.value)}
                </h3>
                <p className="text-xs font-normal">
                  Total Price:
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency:
                      hotel?.property.priceBreakdown.grossPrice.currency,
                  }).format(hotel?.property.priceBreakdown.grossPrice.value)}
                </p>
                <p className="text-xs font-normal">
                  1 room x 10 nights incl. taxes
                </p>
              </div>
            </div>
            <div className="flex items-center text-xs mt-3">
              <HiOutlineLocationMarker className="text-primary" />
              <span className="text-primary mr-2">Show in map</span>
              <FaStar className="text-orange-300" />
              <span className="mr-2">
                {hotel.property.reviewScore} ({hotel?.property.reviewCount})
              </span>
              <FaBed />
              <span className="text-gray-500">King size bedroom</span>
            </div>
          </section>

          <section className="p-3 flex justify-between items-center text-gray-500 border-t border-b border-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <span>Facilities: </span>
              <PiSwimmingPoolBold />
              <span>Pool </span>
              <MdLocalBar />
              <span>Bar </span>
            </div>
            <div className="flex items-center gap-2">
              <SlCalender />
              <span>Check In: {hotel?.property?.checkinDate}</span>
              <SlCalender />
              <span>Check Out: {hotel?.property?.checkoutDate}</span>
            </div>
          </section>
          <section className="flex items-center justify-between p-3 text-primary text-sm font-medium">
            <div className="flex items-center gap-3">
              <a href="">Hotel Details</a>
              <a href="">Price Details</a>
            </div>
            <a href="">Edit Details</a>
          </section>
        </div>
      </div>
      {actionType === "add" ? (
        <button
          onClick={() => addHotel(hotel)}
          className="min-w-min px-1 bg-green-200"
          title="click to add to list "
        >
          <FaPlus />
        </button>
      ) : (
        <button
          onClick={() => removeHotel(hotel)}
          className="min-w-min px-1 bg-red-200"
        >
          <IoCloseSharp title="click to remove from list" />
        </button>
      )}
    </div>
  );
};

export default HotelDetail;
