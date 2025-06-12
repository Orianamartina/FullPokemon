export const fetchPokemonList = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=14&offset=0"
  );
  const { results } = await response.json();

  const detailedData = await Promise.all(
    results.map(async (item: any) => {
      const res = await fetch(item.url);
      const data = await res.json();
      return {
        id: data.id,
        name: data.name,
        types: (data.types ?? []).map((t: any) => t?.type?.name ?? "unknown"),
        sprite: data.sprites.front_default,
      };
    })
  );

  return detailedData;
};
