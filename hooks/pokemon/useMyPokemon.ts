import { ParsedPokemon } from "@/types/Pokemon";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "expo-router";
import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "myPokemon";

export const useMyPokemon = () => {
  const [myPokemon, setMyPokemon] = useState<ParsedPokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const loadFromStorage = useCallback(async () => {
    try {
      setIsLoading(true);
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) {
        setMyPokemon(JSON.parse(stored));
      }
    } catch (e: any) {
      setError(e instanceof Error ? e : new Error("Failed to load Pokémon"));
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadFromStorage();
  }, [loadFromStorage]);
  useFocusEffect(
    useCallback(() => {
      loadFromStorage();
    }, [loadFromStorage])
  );
  const saveToStorage = async (updatedList: ParsedPokemon[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
    } catch (e: any) {
      setError(e instanceof Error ? e : new Error("Failed to save Pokémon"));
    }
  };

  const addPokemon = useCallback(
    async ({ name, id, types, sprites }: ParsedPokemon) => {
      const updated = [...myPokemon, { name, id, types, sprites }];
      setMyPokemon(updated);
      await saveToStorage(updated);
    },
    [myPokemon]
  );

  const removePokemon = useCallback(
    async (id: number) => {
      const updated = myPokemon.filter((p) => p.id !== id);
      setMyPokemon(updated);
      await saveToStorage(updated);
    },
    [myPokemon]
  );

  const isSaved = useCallback(
    (id: number) => myPokemon.some((p) => p.id === id),
    [myPokemon]
  );

  return {
    myPokemon,
    addPokemon,
    removePokemon,
    isSaved,
    isLoading,
    error,
  };
};
