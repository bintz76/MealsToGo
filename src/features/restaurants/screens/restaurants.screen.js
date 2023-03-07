import React from "react";
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/rstaurant-info-card.component";

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchbarContainer>
        <Searchbar />
      </SearchbarContainer>
      <RestauranrListContainer>
        <RestaurantInfoCard />
      </RestauranrListContainer>
    </SafeArea>
  );
};

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;
const SearchbarContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const RestauranrListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;
