import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Posts from "./posts";
import Home from "../screens/Home";

const {
  Navigator: TabNavigator,
  Screen: TabScreen,
} = createBottomTabNavigator();

const RootNavigator = () => (
  <NavigationContainer>
    <TabNavigator
      tabBarOptions={{
        activeTintColor: "cyan",
        inactiveTintColor: "white",
        labelStyle: { fontSize: 20, fontWeight: "bold" },
        style: { backgroundColor: "blue", paddingHorizontal: 50 },
      }}
      initialRouteName="home"
    >
      <TabScreen name="home" component={Home} />
      <TabScreen name="posts" component={Posts} />
    </TabNavigator>
  </NavigationContainer>
);

export default RootNavigator;
