import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const rawData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5/?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await rawData.json();

        setListOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
        setFilteredRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    };

    return listOfRestaurants.length === 0 ? (
        <ShimmerUI />
    ) : (
        <div className="body">
            <div className="filter-container">
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Search Restaurants"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        onClick={() => {
                            let searchResults = listOfRestaurants.filter((restaurant) => 
                                restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            console.log(searchResults);
                            setFilteredRestaurants(searchResults);
                        }}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="top-rated-res-filter-btn"
                    onClick={() => {
                        const filteredRestaurant = listOfRestaurants.filter((res) => 
                            res.info.avgRatingString > 4.5
                        );
                        setFilteredRestaurants(filteredRestaurant);
                    }}
                >
                    Top Rated
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant) => (
                    <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id} className="res-card-link">
                        <RestaurantCard resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
