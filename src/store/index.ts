import { configureStore } from "@reduxjs/toolkit";

// Slices
import modalSlice from "./slices/modalSlice";

export default configureStore({
  reducer: {
    modal: modalSlice
  },
});
