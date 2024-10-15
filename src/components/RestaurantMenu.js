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
        <div className="restaurant-menu-container">
            <div className="restaurant-header">
                <h1 className="restaurant-name">{name}</h1>
                <h3 className="restaurant-cuisines">{cuisines.join(", ")}</h3>
                <p className="restaurant-cost">{costForTwoMessage}</p>
            </div>

            <div className="menu-section">
                <div className="menu-grid">
                    {items.map((item) => (
                        <div key={item.card.info.id} className="menu-card">
                            <div className="menu-card-content">
                                <h4>{item.card.info.name}</h4>
                                <p className="menu-item-price">₹{item.card.info.price / 100 || item.card.info.defaultPrice /100}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RestaurantMenu;
