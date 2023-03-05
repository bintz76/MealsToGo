import React from "react";
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/rstaurant-info-card.component";

export  const RestaurantsScreen = () => (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar/>
      </View>
      <View style={styles.contents}>
        <RestaurantInfoCard />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
)

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    search: {
      padding: 16,
    },
    contents: {
      backgroundColor: "blue",
      flex: 1,
      padding: 16,
    },
  });