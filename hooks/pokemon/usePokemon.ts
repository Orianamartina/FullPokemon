import { fetchPokemonList } from "@/api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export const usePokemon = () => {
  const [pokemonList, setPokemonList] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadPokemon = async () => {
      try {
        const cached = await AsyncStorage.getItem("pokemonList");
        if (cached) {
          setPokemonList(JSON.parse(cached).slice(0, 20));
        } else {
          const fetched = (await fetchPokemonList()).slice(0, 20);
          setPokemonList(fetched);
          await AsyncStorage.setItem("pokemonList", JSON.stringify(fetched));
        }
      } catch (e: any) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    loadPokemon();
  }, []);

  return { pokemonList, loading, error };
};
