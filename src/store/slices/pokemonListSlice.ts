import { createSlice } from "@reduxjs/toolkit";

// Types
import { PokemonType } from "../../types/pokemonType";

export const PokemonListSlice = createSlice({
  name: "pokemonList",
  initialState: [] as PokemonType[],
  reducers: {
    createList: (state, action) => {
      return action.payload;
    },
  },
});

export const { createList } = PokemonListSlice.actions;
export default PokemonListSlice.reducer;
