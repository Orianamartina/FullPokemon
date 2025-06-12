import { colors, pokemonColorVariants } from "@/constants/colors";
import { fontStyles } from "@/constants/fonts";
import { sizes } from "@/constants/sizes";
import { Pokemon } from "@/types/Pokemon";
import { capitalize } from "@/utils/stringUtils";
import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Card = (item: Pokemon) => {
  const { id, name, types, sprite } = item;
  return (
    <Link href={`/pokemon/${id}`} asChild>
      <TouchableOpacity style={style.container}>
        <View style={style.imageContainer}>
          <Image
            source={{ uri: sprite }}
            style={{ height: 100, width: 100, resizeMode: "contain" }}
          />
        </View>
        <Text style={fontStyles.caption.bold}>{capitalize(name)}</Text>
        <View style={style.typeList}>
          {types.map((t, i) => (
            <Text
              numberOfLines={1}
              style={[style.type, pokemonColorVariants[t]]}
              key={i}
            >
              {capitalize(t)}
            </Text>
          ))}
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default Card;

const style = StyleSheet.create({
  container: {
    borderColor: colors.ironMan,
    borderRadius: sizes.xs,
    padding: sizes.s,
    borderWidth: 1,
    margin: sizes.m,
    alignItems: "center",
    width: "100%",
  },
  imageContainer: {
    overflow: "hidden",
  },

  typeList: {
    display: "flex",
    flexDirection: "row",
    gap: sizes.xs,
    marginTop: sizes.s,
  },
  type: {
    padding: 3,
    borderRadius: 3,
  },
});
