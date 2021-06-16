import React, { Component, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/searchBar";
import Axios from "axios";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const searchScreen = () => {
  const [term, setTerm] = useState(""); //for entered text
  const [searchApi, results, errorMssg] = useResults();

  const filterResultsByPrice = (price) => {
    //price==='$'||'$$'||'$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.bg}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      ></SearchBar>
      {errorMssg ? <Text>{errorMssg}</Text> : null}
      {/* <Text>We have found {results.length} results</Text> */}
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
        ></ResultsList>
        <ResultsList
          title="Bit Pricier"
          results={filterResultsByPrice("$$")}
        ></ResultsList>
        {/* <ResultsList
          title="Big Spender"
          results={filterResultsByPrice("$$$")}
        ></ResultsList> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "white",
    flex: 1, // for taking the full screen length even for a smaller or larger
  },
});
export default searchScreen;
