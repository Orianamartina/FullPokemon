import { fetchPokemonDetail } from "@/api/api";
import { Pokemon } from "@/types/Pokemon";
import { useQuery } from "@tanstack/react-query";

const STORAGE_KEY = "pokemonDetail";

export const usePokemonDetail = (id: number) => {
  return useQuery<Pokemon | undefined, Error>({
    queryKey: [STORAGE_KEY],
    queryFn: async () => {
      const fetched = await fetchPokemonDetail(id);
      return fetched;
    },
  });
};
