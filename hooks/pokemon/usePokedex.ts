import { Pokedex } from "@/entities/Pokedex";
import { ParsedPokemon } from "@/types/Pokemon";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
type PokemonFilter = (p: ParsedPokemon) => boolean;

export const usePokedex = () => {
  const [myPokemon, setMyPokemon] = useState<ParsedPokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const reload = useCallback(async () => {
    try {
      setIsLoading(true);
      const list = await Pokedex.list();
      setMyPokemon(list);
    } catch (e) {
      setError(e as Error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      reload();
    }, [reload])
  );
  const add = async (pokemon: ParsedPokemon) => {
    await Pokedex.add(pokemon);
    await reload();
  };

  const remove = async (id: number) => {
    await Pokedex.remove(id);
    await reload();
  };

  const isSaved = async (id: number) => {
    return await Pokedex.isSaved(id);
  };

  const filterByType = async (type: string) => {
    if (!type || type === "all") {
      Pokedex.clearFilters();
      setMyPokemon(await Pokedex.list());
      return;
    }

    const filterFn: PokemonFilter = (pokemon) =>
      pokemon.types.some((t) => t.type.name === type);
    Pokedex.setFilter("type", filterFn);
    setMyPokemon(await Pokedex.list());
  };

  const filterByName = async (name: string) => {
    const filterFn: PokemonFilter = (pokemon) =>
      pokemon.name.toLowerCase().includes(name.toLowerCase());
    Pokedex.setFilter("name", filterFn);
    setMyPokemon(await Pokedex.list());
  };

  const clearFilters = () => {
    Pokedex.clearFilters();
    reload();
  };

  return {
    myPokemon,
    isLoading,
    error,
    reload,
    add,
    remove,
    isSaved,
    filterByType,
    filterByName,
    clearFilters,
  };
};
