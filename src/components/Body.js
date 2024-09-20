import ResturantCard from "../ResturantCard";
import resList from "../utils/mockData";

import {useState} from "react";

const Body = () => {
    const [listOfResturants, setListOfResturants] = useState(resList);

    return (
        <div className="body">
            <div className="search-box">Search Bar</div>
            <div className="filter-container">
                <button
                    className="top-rated-res-filter-btn"
                    onClick={() => {
                        const filteredRestaurant = listOfResturants.filter((res) => {
                            return res.info.avgRatingString > 4.5;
                        });
                        setListOfResturants(filteredRestaurant);
                    }}
                >
                    Top Rated
                </button>
            </div>
            <div className="res-container">
                {listOfResturants.map((resturant) => (
                    <ResturantCard key={resturant.info.id} resData={resturant} />
                ))}
            </div>
        </div>
    );
};


export default Body;