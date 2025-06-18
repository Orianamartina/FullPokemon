import PokemonDetail from "@/components/PokemonDetail";
import { colors } from "@/constants/colors";
import { sizes } from "@/constants/sizes";
import { useMyPokemon } from "@/hooks/pokemon/useMyPokemon";
import { usePokemonDetail } from "@/hooks/pokemon/usePokemonDetail";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ArrowLeft, HeartMinus, HeartPlus } from "lucide-react-native";
import React, { useMemo } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";

const PokemonDetailPage = () => {
  const { id } = useLocalSearchParams();
  const numericId = typeof id === "string" ? parseInt(id, 10) : NaN;

  const router = useRouter();

  const { data, isLoading, error } = usePokemonDetail(numericId);
  const { isSaved, addPokemon, removePokemon } = useMyPokemon();
  const saved = useMemo(() => isSaved(numericId), [isSaved, numericId]);

  if (isLoading) return <ActivityIndicator />;

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: sizes.m,
        }}
      >
        <Pressable onPress={() => router.back()}>
          <ArrowLeft color={colors.primaryBase} />
        </Pressable>

        {saved ? (
          <Pressable onPress={() => removePokemon(data!.id)}>
            <HeartMinus color={colors.primaryBase} />
          </Pressable>
        ) : (
          <Pressable onPress={() => addPokemon(data!)}>
            <HeartPlus color={colors.primaryBase} />
          </Pressable>
        )}
      </View>

      {error && <Text>Error: {error.message}</Text>}
      <PokemonDetail pokemon={data} />
    </View>
  );
};

export default PokemonDetailPage;
