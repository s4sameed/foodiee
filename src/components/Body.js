import ResturantCard from "./ResturantCard";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";

import {useState, useEffect} from "react";

const Body = () => {
    const [listOfResturants, setListOfResturants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData()
    },[])


    const fetchData = async () => {
        const rawData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5/?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")

        const jsonData = await rawData.json();

        setListOfResturants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return listOfResturants.length === 0 ? <ShimmerRestaurantCard count = {4} /> : (
        <div className="body">
            <div className="filter-container">
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Search Restaurants"
                        value={searchText}
                        onChange={(e)=>setSearchText(e.target.value)}
                    />
                    <button
                        onClick={
                            () => {
                                let searchResults = listOfResturants.filter((restaurant)=>{
                                    return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                                })
                                console.log(searchResults)
                                setFilteredRestaurants(searchResults);
                            }
                        }
                    >
                        Search
                    </button>
                </div>
                <button
                    className="top-rated-res-filter-btn"
                    onClick={() => {
                        const filteredRestaurant = listOfResturants.filter((res) => {
                            return res.info.avgRatingString > 4.5;
                        });
                        setFilteredRestaurants(filteredRestaurant);
                    }}
                >
                    Top Rated
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((resturant) => (
                    <ResturantCard key={resturant.info.id} resData={resturant} />
                ))}
            </div>
        </div>
    );
};


export default Body;