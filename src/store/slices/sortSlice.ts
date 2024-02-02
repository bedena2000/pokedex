import { createSlice } from "@reduxjs/toolkit";

export type sortType = "lowest" | "higher" | "AZ" | "ZA" | undefined;

interface actionType {
  type: string;
  payload: sortType;
}

const sortSlice = createSlice({
  name: "sort",
  initialState: "lowest" as sortType,
  reducers: {
    changeSort: (state, action: actionType) => {
      return action.payload;
    },
  },
});

export const { changeSort } = sortSlice.actions;
export default sortSlice.reducer;
