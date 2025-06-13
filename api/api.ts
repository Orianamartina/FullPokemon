import { Pokemon, PokemonPreview } from "@/types/Pokemon";

export const fetchPokemonList = async () => {
  // code replacement to fetch data from "response.json" mock object
  // const response: ParsedPokemon[] = require("@/utils/response.json").data;
  // return response;
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=14&offset=0"
  );
  const { results } = await response.json();

  const detailedData: Pokemon[] = await Promise.all(
    results.map(async (item: PokemonPreview) => {
      const res = await fetch(item.url);
      return await res.json();
    })
  );

  return detailedData;
};
