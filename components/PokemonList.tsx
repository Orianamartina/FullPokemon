import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import { sizes } from "@/constants/sizes";
import { usePokemon } from "@/hooks/pokemon/usePokemon";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Button from "./ui/Button";
import Card from "./ui/Card";

const PokemonList = () => {
  const { data, isLoading, error } = usePokemon();

  if (isLoading) return <ActivityIndicator />;
  return (
    <View style={style.container}>
      <View style={style.title}>
        <Text style={style.titleText}>My pokemon</Text>
        <Button
          text="+"
          onPress={() => {}}
          variant="primary"
          size={50}
        ></Button>
      </View>
      {error && <Text>Error: {error.message}</Text>}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={{ width: "45%" }}>
            <Card {...item} />
          </View>
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "flex-start",
          gap: sizes.s,
        }}
        contentContainerStyle={{
          paddingBottom: sizes.xl,
          gap: sizes.s,
        }}
      />
    </View>
  );
};

export default PokemonList;
const style = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: "100%",
    borderRadius: 10,
    flex: 1,
    overflow: "visible",
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
