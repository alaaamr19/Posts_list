import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function PostsList() {
  const navigation = useNavigation();
  const [list, setlist] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setlist(json))
      .catch((error) => console.error(error));
  });

  return (
    <View style={{ justifyContent: "center", flex: 1 }}>
      <FlatList
        style={{ paddingHorizontal: 30 }}
        data={list}
        renderItem={({ item }) => (
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                padding: 100,
              }}
              onPress={() => {
                navigation.navigate("PostDetails", { post: item });
              }}
            >
              <Text style={{ fontWeight: "bold" }}>{item.title}</Text>

              <Image
                source={{ uri: "https://source.unsplash.com/random" }}
                style={{ width: 200, height: 200 }}
              />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.body}
        contentContainerStyle={{
          alignItems: "center",
        }}
      />
    </View>
  );
}
