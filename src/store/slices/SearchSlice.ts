import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "saerchValue",
  initialState: "",
  reducers: {
      changeSearch: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeSearch } = SearchSlice.actions;
export default SearchSlice.reducer;
