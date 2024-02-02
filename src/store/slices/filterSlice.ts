import { createSlice } from "@reduxjs/toolkit";

interface payloadType {
  type: string;
  height: string;
}

interface actionTypes {
  type: string;
  payload: payloadType;
}

const initialState = {
  type: "",
  height: "",
};

const fitlerSlice = createSlice({
  name: "pokemonSlice",
  initialState: initialState,
  reducers: {
    changeSettings: (state, action: actionTypes) => {
      return {
        ...action.payload,
      };
    },
  },
});

export const { changeSettings } = fitlerSlice.actions;
export default fitlerSlice.reducer;
