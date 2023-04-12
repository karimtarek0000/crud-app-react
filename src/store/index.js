import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import globalSlice from "./globalSlice";
import notesSlice from "./notesSlice";

const store = configureStore({
  reducer: { notesSlice, globalSlice, authSlice },
});
export default store;
