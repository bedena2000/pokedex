// Types
import { PokemonEvolutionType } from "../types/pokemonType";

export const objectInfo = (currentObject: PokemonEvolutionType[]) => {
  const result: PokemonEvolutionType[] = [];

  const pushPokemon = (currentEvolutionObject: PokemonEvolutionType) => {
    if (currentEvolutionObject.evolves_to.length === 0) {
      result.push(currentEvolutionObject);
      return;
    }

    result.push(currentEvolutionObject);

    pushPokemon(currentEvolutionObject.evolves_to[0]);
  };

  pushPokemon(currentObject[0]);

  return result;
};
