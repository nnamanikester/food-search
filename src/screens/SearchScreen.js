import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => result.price === price);
  };

  return (
    <View>
      <SearchBar
        onTermSubmit={() => searchApi(term)}
        term={term}
        onTermChange={setTerm}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultList results={filterResultsByPrice("$")} title="Cost Effective" />
      <ResultList results={filterResultsByPrice("$$")} title="Bit Pricier" />
      <ResultList results={filterResultsByPrice("$$$")} title="Big Spende" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
