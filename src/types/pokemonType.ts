interface pokemonTypes {
  slot: number;
  type: PokemonTypes;
}

interface pokemonSprites {
  front_shiny: string;
  other: {
    dream_world: {
      front_default: string;
    };
  };
}

interface pokemonForms {
  name: string;
  url: string;
}

interface pokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface pokemonSpecies {
  name: string;
  url: string;
}

export interface pokemonStats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonType {
  abilities: pokemonAbility[];
  forms: pokemonForms[];
  id: number;
  is_default: boolean;
  name: string;
  order: number;
  sprites: pokemonSprites;
  weight: number;
  types: pokemonTypes[];
  species: pokemonSpecies;
  height: number;
  stats: pokemonStats[];
}

export interface PokemonTypes {
  name: string;
  url: string;
}

export type pokemonTypeList = PokemonType[];

export interface pokemonDescribeModal {
  chosePokemon: string;
  pokemonDescribeModal: boolean;
  pokemonId: number;
}

export type pokemonChosePage = "about" | "base stats" | "evolution";

export interface PokemonEvolutionType {
  is_baby: boolean;
  species: PokemonTypes;
  evolves_to: evolves_to_type[];
  evolution_details: PokemonEvolutionDetails[]
}

export interface evolves_to_type {
  evolves_to: evolves_to_type[];
  species: PokemonTypes;
  is_baby: boolean;
}

export interface PokemonEvolutionDetails {
  min_level: number;
}
