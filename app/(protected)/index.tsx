import PokemonList from "@/components/PokemonList";
import { colors } from "@/constants/colors";
import { sizes } from "@/constants/sizes";
import React from "react";
import { StyleSheet, View } from "react-native";

const home = () => {
  return (
    <View style={style.mainContainer}>
      <PokemonList />
    </View>
  );
};

export default home;

const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.primaryBase,
    padding: sizes.m,
    flex: 1,
  },
});
