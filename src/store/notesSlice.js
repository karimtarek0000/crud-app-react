import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
    const { rejectWithValue } = thunkAPI;
    try {
      await axios.delete(`${process.env.REACT_APP_NOTES}/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Add new note
export const addNote = createAsyncThunk(
  "notes/addNote",
  async (note, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post(process.env.REACT_APP_NOTES, note);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Get a note
export const getNote = createAsyncThunk(
  "notes/getNote",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_NOTES}/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Update note
export const updateNote = createAsyncThunk(
  "notes/updateNote",
  async (note, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await axios.patch(`${process.env.REACT_APP_NOTES}/${note.id}`, note);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  records: [],
  record: {},
  loading: false,
  error: null,
};
const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    cleanRecord(state) {
      state.record = {};
    },
  },
  extraReducers(builder) {
    // Get all notes
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
    // Delete a note
    builder.addCase(deleteNote.pending, (state) => {
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
    // Add a note
    builder.addCase(addNote.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addNote.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.records.push(payload);
    });
    builder.addCase(addNote.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // Get a note
    builder.addCase(getNote.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getNote.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.record = payload;
    });
    builder.addCase(getNote.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // Update note
    builder.addCase(updateNote.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateNote.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(updateNote.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { cleanRecord } = notesSlice.actions;
export default notesSlice.reducer;
