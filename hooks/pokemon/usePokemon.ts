import { fetchPokemonList } from "@/api/api";
import { Pokemon } from "@/types/Pokemon";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery } from "@tanstack/react-query";

const STORAGE_KEY = "pokemonList";

export const usePokemon = () => {
  return useQuery<Pokemon[], Error>({
    queryKey: ["pokemonList"],
    queryFn: async () => {
      await AsyncStorage.clear();
      const cached = await AsyncStorage.getItem(STORAGE_KEY);
      if (cached) {
        return JSON.parse(cached).slice(0, 20);
      } else {
        const fetched = (await fetchPokemonList()).slice(0, 20);
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(fetched));
        return fetched;
      }
    },
  });
};
