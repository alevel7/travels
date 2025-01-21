import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { FaPlus, FaStar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import { ActivityProduct } from "../../../models/activityModels";
import { useItineraryStore } from "../../../store/store";

interface ActivityDetailProps {
  actionType: "add" | "remove";
  activity: ActivityProduct;
}

const ActivityDetail = ({
  actionType = "remove",
  activity,
}: ActivityDetailProps) => {
  const { addActivity, removeActivity } = useItineraryStore();
  return (
    <div className="flex mt-3">
      <div className="w-full flex items-center bg-white py-5 pl-5 rounded-tl-md rounded-bl-md">
        <img
          className="size-44 rounded-md"
          src={activity?.primaryPhoto.small}
          alt=""
        />
        <div className="w-full">
          <section className="p-3">
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold mb-1">{activity?.name}</h3>
                <p className="text-xs font-normal">
                  {activity?.shortDescription}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: activity.representativePrice.currency,
                  }).format(activity.representativePrice.chargeAmount)}
                </h3>
                <p className="text-xs font-normal">10:30 AM on Mar 19</p>
              </div>
            </div>
            <div className="flex items-center text-xs mt-3">
              <HiOutlineLocationMarker className="text-primary" />
              <span className="text-primary mr-2">Directions</span>
              <FaStar className="text-orange-300" />
              <span className="mr-2">
                {activity.reviewsStats.percentage} (
                {activity.reviewsStats.allReviewsCount})
              </span>
              <FaRegClock className="mr-2" />
              <span className="text-gray-500">1 Hour</span>
            </div>
          </section>

          <section className="p-3 flex justify-between items-center text-gray-500 border-t border-b border-gray-300 text-sm">
            <p>
              What's included: Admission into the empire state building{" "}
              <span className="text-primary">see more</span>
            </p>
            <div className="flex items-center gap-2">
              <button className="bg-primaryDeep text-white px-3 py-1 rounded">
                Day 1- (2)
              </button>
              <div className="flex flex-col gap-1 text-lg">
                <IoIosArrowDropup />
                <IoIosArrowDropdown />
              </div>
            </div>
          </section>
          <section className="flex items-center justify-between p-3 text-primary text-sm font-medium">
            <div className="flex items-center gap-3">
              <a href="">Activities Details</a>
              <a href="">Price Details</a>
            </div>
            <a href="">Edit Details</a>
          </section>
        </div>
      </div>
      {actionType === "add" ? (
        <button
          onClick={() => addActivity(activity)}
          className="min-w-min px-1 bg-green-200"
          title="click to add to list "
        >
          <FaPlus />
        </button>
      ) : (
        <button
          onClick={() => removeActivity(activity)}
          className="min-w-min px-1 bg-red-200"
        >
          <IoCloseSharp title="click to remove from list" />
        </button>
      )}
    </div>
  );
};

export default ActivityDetail;
