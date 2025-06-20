import { Pokemon, PokemonPreview } from "@/types/Pokemon";

const BASE_URL = "https://pokeapi.co/api/v2/";
const getUrl = (url: string) => `${BASE_URL}${url}`;

export const fetchPokemonList = async () => {
  // code replacement to fetch data from "response.json" mock object
  // const response: Pokemon[] = require("@/utils/response.json").data;
  // return response;
  const response = await fetch(getUrl("pokemon?limit=14&offset=0"));
  const { results } = await response.json();

  const detailedData: Pokemon[] = await Promise.all(
    results.map(async (item: PokemonPreview) => {
      const res = await fetch(item.url);
      return await res.json();
    })
  );

  return detailedData;
};

export const fetchPokemonDetail = async (
  id: number
): Promise<Pokemon | undefined> => {
  // using mock JSON
  // const response: Pokemon[] = require("@/utils/response.json").data;
  // return response.find((p) => p.id === id);

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return await res.json();
};
