import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function PostsHome() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity
        style={{
          backgroundColor: "blue",
          borderRadius: 20,
          height: 20,
          width: 100,
        }}
        onPress={() => {
          navigation.navigate("Posts");
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
          }}
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}
