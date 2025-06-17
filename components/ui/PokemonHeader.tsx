import { colors, pokemonColorVariants } from "@/constants/colors";
import { fonts, fontSizes, textStyles } from "@/constants/fonts";
import { sizes } from "@/constants/sizes";
import { Type } from "@/types/Pokemon";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface PokemonHeaderProps {
  imageUri: string;
  types: Type[];
  title: string;
}
const PokemonHeader = ({ imageUri, types, title }: PokemonHeaderProps) => {
  return (
    <View style={style.header}>
      <Text style={[style.title, textStyles.capitalized]}>{title}</Text>
      <Image
        source={{ uri: imageUri }}
        style={{
          height: 200,
          width: 200,
          resizeMode: "contain",
          margin: "auto",
        }}
      />
      <View style={style.typeContainer}>
        {types.map((t, i) => (
          <Text
            numberOfLines={1}
            style={[
              style.type,
              textStyles.capitalized,
              pokemonColorVariants[t.type.name],
            ]}
            key={i}
          >
            {t.type.name}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default PokemonHeader;
const style = StyleSheet.create({
  header: {
    backgroundColor: colors.secondaryLight,
    padding: sizes.m,
    marginBottom: sizes.m,
    borderTopLeftRadius: sizes.l,
    borderTopRightRadius: sizes.l,
  },
  title: {
    fontSize: fontSizes.h1,
    margin: "auto",
    fontFamily: fonts.epilogue.bold,
    color: colors.primaryBase,
  },
  typeContainer: {
    display: "flex",
    flexDirection: "row",
    margin: "auto",
    gap: sizes.m,
  },
  type: {
    padding: 3,
    borderRadius: 3,
    fontSize: fontSizes.body,
  },
});
