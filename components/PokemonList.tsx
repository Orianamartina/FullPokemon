import { colors } from "@/constants/colors";
import { sizes } from "@/constants/sizes";
import { Pokemon } from "@/types/Pokemon";
import React, { ReactElement } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Card from "./ui/Card";
interface PokemonListProps {
  data: Pokemon[] | undefined;
  isLoading: boolean;
  error: Error | null;
  header: ReactElement;
}
const PokemonList = ({ data, isLoading, error, header }: PokemonListProps) => {
  if (isLoading) return <ActivityIndicator />;
  return (
    <View style={style.container}>
      {header}
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
});
