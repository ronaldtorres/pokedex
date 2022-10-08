export type PokemonStatType = { base_stat: number; stat: { name: string } };

export type Pokemon = {
  id: number;
  name: string;
  types: [{ type: { name: string } }];
  weight: number;
  height: number;
  stats: PokemonStatType[];
};
