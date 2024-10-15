import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (restaurantId) => {

    const [restaurantInfo, setRestaurantInfo] = useState(null);


    useEffect(()=>{
        fetchData();
    },[])


    const fetchData = async () => {
        const response = await fetch(MENU_API_URL + restaurantId +"&catalog_qa=undefined&submitAction=ENTER");
        const json = await response.json();
        setRestaurantInfo(json.data);
    }


    return restaurantInfo;
}

export default useRestaurantMenu;