import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Create async thunk to use it with api becouse reducer shoul'd not use with side effects
export const fetchNotes = createAsyncThunk(
  "notes/fetchNotes",
  async (payload, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.get(process.env.REACT_APP_NOTES);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const initialState = {
  records: [],
  loading: false,
  error: null,
};
const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchNotes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchNotes.fulfilled, (state, action) => {
      state.loading = false;
      state.records = action.payload;
    });
    builder.addCase(fetchNotes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { test } = notesSlice.actions;
export default notesSlice.reducer;
