import { PokemonType, pokemonDescribeModal } from "./pokemonType";
import { pokemonStats } from "./pokemonType";

export interface dataType {
  modal: boolean;
  pokemonList: PokemonType[];
  filters: { type: string; height: string }[];
  sort: string;
  searchValue: string;
  pokemonDescribe: pokemonDescribeModal;
  pokemonStats: pokemonStats[];
}
