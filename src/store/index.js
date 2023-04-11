import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./globalSlice";
import notesSlice from "./notesSlice";

const store = configureStore({ reducer: { notesSlice, globalSlice } });
export default store;
