import React, { useState, createContext, useEffect, useContext, } from "react";
import { restaurantsRequest, restaurantsTransform } from "./restaurantsService";
import { LocationContext } from "../location/location.context";

export const RestaurantsContext = createContext();
export const RestaurantsContextProvider = ({ children }) => {

    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const { location } = useContext(LocationContext);

    // console.log(location);

    const retrieveRestaurants = (loc) => {
        setRestaurants([])
        setIsLoading(true);
        setTimeout(() => {
            restaurantsRequest(loc)
                .then(restaurantsTransform)
                .then((results) => {
                    setIsLoading(false)
                    setRestaurants(results)
                })
                .catch((err) => {
                    setIsLoading(false)
                    setError(err);
                })

        }, 2000)

    }

    useEffect(() => {


        location && retrieveRestaurants(`${location.lat},${location.lng}`);
        //    location &&  console.log(`${location.lat},${location.lng}`);


    }, [location])

    // let a=restaurants.map((restaurant)=>{
    //     return restaurant.geometry
    // })
    // console.log(a);

    return (
        <RestaurantsContext.Provider
            value={{
                restaurants,
                isLoading,
                error

            }}
        >
            {children}
        </RestaurantsContext.Provider>
    )
}










