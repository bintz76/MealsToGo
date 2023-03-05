import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  // console,log(Platform)

  return (
    <>
    <RestaurantsScreen />
    </>
  );
}

