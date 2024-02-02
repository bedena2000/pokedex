import { createSlice } from "@reduxjs/toolkit";

const pokemonDescribe = createSlice({
  name: "pokemonDescribe",
  initialState: {
    chosePokemon: null,
    pokemonDescribeModal: false,
    pokemonId: null,
  },
  reducers: {
    changeDescribePokemon: (state, action) => {
      return {
        chosePokemon: action.payload.name,
        pokemonDescribeModal: !state.pokemonDescribeModal,
        pokemonId: action.payload.pokemonId,
      };
    },
    closePokemonDescribeModal: (state) => {
      return {
        chosePokemon: state.chosePokemon,
        pokemonDescribeModal: false,
        pokemonId: state.pokemonId,
      };
    },
  },
});

export const { changeDescribePokemon, closePokemonDescribeModal } =
  pokemonDescribe.actions;
export default pokemonDescribe.reducer;
