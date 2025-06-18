import PokemonList from "@/components/PokemonList";
import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import { sizes } from "@/constants/sizes";
import { useMyPokemon } from "@/hooks/pokemon/useMyPokemon";
import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const myPokemon = () => {
  const router = useRouter();
  const { myPokemon, isLoading, error } = useMyPokemon();

  return (
    <View style={style.mainContainer}>
      <PokemonList
        data={myPokemon}
        isLoading={isLoading}
        error={error}
        header={
          <View style={style.title}>
            <Pressable
              onPress={() => router.replace("/")}
              style={{ padding: sizes.m }}
            >
              <ArrowLeft color={colors.primaryBase} />
            </Pressable>
            <Text style={style.titleText}>My pokemon</Text>
          </View>
        }
      />
    </View>
  );
};

export default myPokemon;

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: sizes.m,
    backgroundColor: colors.primaryBase,
  },
  title: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  titleText: {
    color: colors.primaryBase,
    fontFamily: fonts.epilogue.bold,
    fontSize: sizes.l,
  },
});
