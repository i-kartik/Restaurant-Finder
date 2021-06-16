import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }}></Image>
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews{" "}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 175,
    borderRadius: 3,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
    fontSize: 14,
  },
  container: {
    marginLeft: 15,
  },
});
export default ResultsDetail;
