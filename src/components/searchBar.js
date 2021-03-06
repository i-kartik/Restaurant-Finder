import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.bg}>
      <View style={styles.background}>
        <Feather name="search" style={styles.iconStyle} color="black" />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputStyle}
          placeholder="Search"
          value={term}
          onChangeText={onTermChange}
          onEndEditing={onTermSubmit}
        ></TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    borderRadius: 5,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});
export default SearchBar;
