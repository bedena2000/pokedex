import { createSlice } from "@reduxjs/toolkit/react";

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState: false,
  reducers: {
    changeModal: (state: boolean) => {
      return !state;
    }
  }
})

export const { changeModal } = modalSlice.actions;

export default modalSlice.reducer;