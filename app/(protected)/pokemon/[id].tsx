import PokemonDetail from "@/components/PokemonDetail";
import { colors } from "@/constants/colors";
import { sizes } from "@/constants/sizes";
import { usePokedex } from "@/hooks/pokemon/usePokedex";
import { usePokemonDetail } from "@/hooks/pokemon/usePokemonDetail";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ArrowLeft, HeartMinus, HeartPlus } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";

const PokemonDetailPage = () => {
  const { id } = useLocalSearchParams();
  const { isSaved, add, remove } = usePokedex();
  const numericId = typeof id === "string" ? parseInt(id, 10) : NaN;

  const router = useRouter();

  const { data, isLoading, error } = usePokemonDetail(numericId);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const checkSaved = async () => {
      const result = await isSaved(numericId);
      setSaved(result);
    };

    if (!isNaN(numericId)) {
      checkSaved();
    }
  }, [isSaved, numericId]);
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
          <Pressable onPress={() => remove(data!.id)}>
            <HeartMinus color={colors.primaryBase} />
          </Pressable>
        ) : (
          <Pressable onPress={() => add(data!)}>
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
