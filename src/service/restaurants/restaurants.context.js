import React, { useState, createContext, useEffect, useMemo } from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./rastaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [res, setRes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const retrieveRestaurants = () => {
    setIsLoading(true);
    // 실제 api 요청인척 timeout걸기
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantsTransform)
        .then((result) => {
          setIsLoading(false);
          setRes(result);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };
  useEffect(() => {
    retrieveRestaurants();
  }, []);
  // console.log(res);
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants: res,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
