import { useParams } from "react-router-dom";

import { CDN_URL, MENU_API_URL } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";

import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const {restaurantId} = useParams();
    const restaurantInfo = useRestaurantMenu(restaurantId);

    if (restaurantInfo === null) return <ShimmerUI />

    const { name, cuisines, costForTwoMessage, cloudinaryImageId } = restaurantInfo?.cards[2]?.card?.card?.info;
    let items = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];

    if(items.length===0){
        const categories = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories;
        items = categories.flatMap(category => category?.itemCards || []);
    }

    return (
        <div className="restaurant-menu-container p-4">
            <div className="restaurant-header mb-6 text-center">
                <h1 className="restaurant-name text-3xl font-bold mb-2">{name}</h1>
                <h3 className="restaurant-cuisines text-lg text-gray-600 mb-2">{cuisines.join(", ")}</h3>
                <p className="restaurant-cost text-md text-gray-500">{costForTwoMessage}</p>
            </div>

            <div className="menu-section">
                <h2 className="text-2xl font-semibold mb-4">Menu</h2>
                <div className="menu-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {items.map((item) => (
                        <div key={item.card.info.id} className="menu-card bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="menu-card-content p-4">
                                <h4 className="text-lg font-semibold">{item.card.info.name}</h4>
                                <p className="menu-item-price text-xl font-bold text-red-500">₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RestaurantMenu;
