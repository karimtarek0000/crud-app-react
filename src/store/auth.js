import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Sign up
export const signUp = createAsyncThunk(
  "auth/signup",
  async (userData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_AUTH}/signup`,
        userData
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Login
export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_AUTH}/signin`,
        userData
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  userData: JSON.parse(localStorage.getItem("userData")) || {},
  token: JSON.parse(localStorage.getItem("token")) || null,
  loggedIn: false,
  loader: false,
  error: false,
};

const authSlice = createSlice({
  initialState,
  reducers: {},
  extraReducers(builder) {
    // Sign up
    builder.addCase(signUp.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      state.loader = false;
      console.log("Signup: ", payload);
    });
    builder.addCase(signUp.rejected, (state) => {
      state.loader = false;
    });
    // Login
    builder.addCase(login.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.loader = false;
      console.log("Login: ", payload);
    });
    builder.addCase(login.rejected, (state) => {
      state.loader = false;
    });
  },
});

// export {} = authSlice.actions
export default authSlice.reducer;
