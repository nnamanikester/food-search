import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");

  return (
    <View>
      <SearchBar
        onTermSubmit={() => console.log("submitted")}
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
      />
      <Text>Search Scrren</Text>
      <Text>{term}</Text>
    </View>
  );
};

export default SearchScreen;
