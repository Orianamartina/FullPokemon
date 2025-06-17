import { fetchPokemonDetail } from "@/api/api";
import { Pokemon } from "@/types/Pokemon";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery } from "@tanstack/react-query";

const STORAGE_KEY = "pokemonDetail";

export const usePokemonDetail = (id: number) => {
  return useQuery<Pokemon | undefined, Error>({
    queryKey: ["pokemonDetail"],
    queryFn: async () => {
      const fetched = await fetchPokemonDetail(id);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(fetched));
      return fetched;
    },
  });
};
