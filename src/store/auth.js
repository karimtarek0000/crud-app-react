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
      return rejectWithValue(error.response.data.message);
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
      return rejectWithValue(error.response.data.message);
    }
  }
);

const initialState = {
  userData: JSON.parse(localStorage.getItem("userData")) || null,
  token: JSON.parse(localStorage.getItem("token")) || null,
  loggedIn: JSON.parse(localStorage.getItem("loggedIn")) || false,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRegister(state, payload) {
      const { user, token } = payload;
      state.userData = user;
      state.token = token;
      state.loggedIn = true;
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("userData", JSON.stringify(user));
      localStorage.setItem("loggedIn", true);
    },
    logOut(state) {
      state.userData = null;
      state.token = null;
      state.loggedIn = false;
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
      localStorage.removeItem("loggedIn");
    },
  },
  extraReducers(builder) {
    // Sign up
    builder.addCase(signUp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      state.loading = false;
      authSlice.caseReducers.setRegister(state, payload);
    });
    builder.addCase(signUp.rejected, (state, { payload }) => {
      state.loading = false;
    });
    // Login
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.loading = false;
      authSlice.caseReducers.setRegister(state, payload);
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      state.loading = false;
    });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
