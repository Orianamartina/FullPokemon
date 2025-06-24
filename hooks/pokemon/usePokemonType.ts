import { fetchTypes } from "@/api/api";
import { useQuery } from "@tanstack/react-query";

export const usePokemonType = () => {
  const query = useQuery({
    queryKey: ["pokemonTypes"],
    queryFn: fetchTypes,
  });

  return {
    isTypeLoading: query.isLoading,
    typeError: query.error,
    types: query.data,
  };
};
