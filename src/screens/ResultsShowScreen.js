import React, { Component, useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");
  // getting id from the onPress from resultslist
  //   console.log(result);
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    response.data;
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id); // passing id from(of) navigation param
  }, []);
  if (!result) {
    return null;
  }
  return (
    <View style={{ backgroundColor: "white" }}>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }}></Image>;
        }}
      ></FlatList>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});
export default ResultsShowScreen;
