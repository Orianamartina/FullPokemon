import PokemonList from "@/components/PokemonList";
import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import { sizes } from "@/constants/sizes";
import { usePokemon } from "@/hooks/pokemon/usePokemon";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const home = () => {
  const data = usePokemon();
  return (
    <View style={style.mainContainer}>
      <PokemonList
        {...data}
        header={
          <View style={style.title}>
            <Text style={style.titleText}>Pokedex</Text>
          </View>
        }
      />
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
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    padding: sizes.xl,
  },
  titleText: {
    color: colors.primaryBase,
    fontFamily: fonts.epilogue.bold,
    fontSize: sizes.l,
  },
});
