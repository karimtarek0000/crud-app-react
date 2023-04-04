import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { closeModal } from "./globalSlice";

// Get all notes
export const fetchNotes = createAsyncThunk(
  "notes/fetchNotes",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.get(process.env.REACT_APP_NOTES);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Delete a note
export const deleteNote = createAsyncThunk(
  "notes/deleteNote",
  async (id, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      await axios.delete(`${process.env.REACT_APP_NOTES}/${id}`);
      dispatch(closeModal());
      return id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const initialState = {
  records: [],
  loading: false,
  error: null,
  // global: globalReducer.getInitialState(),
};
const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers(builder) {
    // For get all notes
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
    // For delete a note
    builder.addCase(deleteNote.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteNote.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.records = state.records.filter((record) => record.id !== payload);
    });
    builder.addCase(deleteNote.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// export const { test } = notesSlice.actions;
export default notesSlice.reducer;
