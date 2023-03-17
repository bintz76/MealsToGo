import React, { useState, createContext, useEffect, useContext } from "react";
import { LocationContext } from "../location/location.context";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./rastaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);
    // 실제 api 요청인척 timeout걸기
    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then((result) => {
          setIsLoading(false);
          setRestaurants(result);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };
  useEffect(() => {
    // const locationString = `${location.lat}, ${location.log}`;
    console.log(location);
    // retrieveRestaurants();
    if (location) {
      const locationString = `${location.lat}, ${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);
  // console.log(restaurants);
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants: restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
