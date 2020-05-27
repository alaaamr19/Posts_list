import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PostDetails from "../screens/PostDetails";
import PostsList from "../screens/PostsList";
import PostsHome from "../screens/PostsHome";

const {
  Navigator: StackNavigator,
  Screen: StackScreen,
} = createStackNavigator();

const Posts = () => (
  <StackNavigator initialRouteName="PostsHome">
    <StackScreen name="PostsHome" component={PostsHome} />
    <StackScreen name="Posts" component={PostsList} />
    <StackScreen name="PostDetails" component={PostDetails} />
  </StackNavigator>
);

export default Posts;
