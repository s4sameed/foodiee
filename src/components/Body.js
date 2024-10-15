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
        <div className="p-4 m-2">
            <div className="flex flex-col md:flex-row justify-between mb-4">
                <div className="flex flex-grow mb-4 md:mb-0">
                    <input
                        type="text"
                        placeholder="Search Restaurants"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="border border-gray-200 rounded-l-md p-2 w-full"
                    />
                    <button
                        onClick={() => {
                            let searchResults = listOfRestaurants.filter((restaurant) => 
                                restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            console.log(searchResults);
                            setFilteredRestaurants(searchResults);
                        }}
                        className="bg-blue-500 text-white rounded-r-md p-2"
                    >
                        Search
                    </button>
                </div>
                <button
                    className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition md:ml-4"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
