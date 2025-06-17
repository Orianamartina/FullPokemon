import PokemonDetail from "@/components/PokemonDetail";
import { colors } from "@/constants/colors";
import { sizes } from "@/constants/sizes";
import { usePokemonDetail } from "@/hooks/pokemon/usePokemonDetail";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import React from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";

const PokemonDetailPage = () => {
  const { id } = useLocalSearchParams();
  const numericId = typeof id === "string" ? parseInt(id, 10) : NaN;

  const router = useRouter();

  const { data, isLoading, error } = usePokemonDetail(numericId);

  if (isLoading) return <ActivityIndicator />;

  return (
    <View style={{ flex: 1 }}>
      <Pressable onPress={() => router.back()} style={{ padding: sizes.m }}>
        <ArrowLeft color={colors.primaryBase} />
      </Pressable>
      {error && <Text>Error: {error.message}</Text>}
      <PokemonDetail pokemon={data} />
    </View>
  );
};

export default PokemonDetailPage;
