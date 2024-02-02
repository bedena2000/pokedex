import { configureStore } from "@reduxjs/toolkit";

// Slices
import modalSlice from "./slices/modalSlice";
import pokemonListSlice from "./slices/pokemonListSlice";
import filterSlice from "./slices/filterSlice";
import sortSlice from "./slices/sortSlice";
import SearchSlice from "./slices/SearchSlice";
import pokemonDescribe from "./slices/pokemonDescribe";

export default configureStore({
  reducer: {
    modal: modalSlice,
    pokemonList: pokemonListSlice,
    filters: filterSlice,
    sort: sortSlice,
    searchValue: SearchSlice,
    pokemonDescribe: pokemonDescribe,
  },
});
