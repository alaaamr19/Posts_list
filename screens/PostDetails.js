import React from "react";
import { View, Text, Image } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function PostDetails() {
  const route = useRoute();
  const post = route.params.post;
  return (
    <View>
      <Text style={{ fontWeight: "bold" }}>{post.title}</Text>
      <Image
        source={{ uri: "https://source.unsplash.com/random" }}
        style={{ width: 400, height: 300 }}
      />
      <Text>{post.body}</Text>
    </View>
  );
}
