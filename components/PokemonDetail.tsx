import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import { sizes } from "@/constants/sizes";
import { Pokemon } from "@/types/Pokemon";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ListField from "./ui/ListField";
import PokemonHeader from "./ui/PokemonHeader";

interface PokemonDetailProps {
  pokemon: Pokemon | undefined;
}

const PokemonDetail = ({ pokemon }: PokemonDetailProps) => {
  if (!pokemon) {
    return <Text>Pokémon not found.</Text>;
  }

  const { sprites, name, types, weight, species, stats, height, abilities } =
    pokemon;
  return (
    <ScrollView style={style.mainContainer}>
      <PokemonHeader
        imageUri={sprites.front_default}
        types={types}
        title={name}
      />
      <View>
        <ListField title="Weight" value={` ${weight / 10} kg`} />
        <ListField title="Height" value={`${height / 10} M`} />
        <ListField title="Species" value={species.name} />
        <ListField
          title="Abilities"
          value={abilities.map((a) => " " + a.ability?.name).toString()}
        />

        <Text style={style.statsTitle}>Stats</Text>
        {stats.map((s, i) => (
          <ListField title={s.stat.name} value={s.base_stat} key={i} />
        ))}
      </View>
    </ScrollView>
  );
};

export default PokemonDetail;

const style = StyleSheet.create({
  mainContainer: {
    margin: sizes.l,
    marginTop: 0,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    gap: sizes.m,
  },
  statsTitle: {
    fontSize: sizes.l,
    color: colors.charcoal,
    fontFamily: fonts.epilogue.bold,
    borderBottomWidth: 2,
    borderColor: colors.dragon,
    margin: "auto",
    marginVertical: sizes.m,
  },
});
