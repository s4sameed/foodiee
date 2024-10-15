import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
    const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } = resData?.info;

    return (
        <div className="res-card border rounded-md shadow-lg flex flex-col h-full">
            <div className="flex-shrink-0">
                <img
                    alt="res-logo"
                    src={CDN_URL + cloudinaryImageId}
                    className="w-full h-36 object-cover"
                />
            </div>
            <div className="flex-grow flex flex-col justify-between p-4">
                <h3 className="text-lg font-semibold">{name}</h3>
                <h5 className="text-sm text-gray-600">{cuisines.join(", ")}</h5>
                <h5 className="text-sm">{avgRating} ⭐</h5>
                <h5 className="text-sm">{sla.deliveryTime} mins</h5>
                <h5 className="text-sm">{costForTwo}</h5>
            </div>
        </div>
    );
};

export default RestaurantCard;