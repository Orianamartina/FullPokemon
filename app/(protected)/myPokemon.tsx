import PokemonList from "@/components/PokemonList";
import SearchBar from "@/components/ui/SearchBar";
import TypeSelect from "@/components/ui/TypeSelect";
import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import { sizes } from "@/constants/sizes";
import { usePokedex } from "@/hooks/pokemon/usePokedex";
import { usePokemonType } from "@/hooks/pokemon/usePokemonType";
import { useRouter } from "expo-router";
import { House } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const myPokemon = () => {
  const router = useRouter();
  const { myPokemon, isLoading, error, filterByName, reload, filterByType } =
    usePokedex();
  const { types, isTypeLoading, typeError } = usePokemonType();
  const [selectedType, setSelectedType] = useState<string>("");

  useEffect(() => {
    if (selectedType) {
      filterByType(selectedType);
    } else {
      reload();
    }
  }, [selectedType]);

  return (
    <View style={style.mainContainer}>
      <PokemonList
        data={myPokemon}
        isLoading={isLoading || isTypeLoading}
        error={error}
        header={
          <View>
            <View style={style.title}>
              <Pressable
                onPress={() => router.dismissTo("/")}
                style={{ padding: sizes.m }}
              >
                <House color={colors.primaryBase} />
              </Pressable>
              <Text style={style.titleText}>My pokemon</Text>
            </View>
            <View
              style={{
                padding: sizes.m,
                display: "flex",
                flexDirection: "column",
                gap: sizes.s,
              }}
            >
              {types && (
                <TypeSelect
                  options={types}
                  value={selectedType}
                  onChange={setSelectedType}
                />
              )}
              <SearchBar onSearch={filterByName} />
            </View>
            {typeError && (
              <Text style={{ color: colors.error }}>
                Error: {typeError.message}
              </Text>
            )}
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
