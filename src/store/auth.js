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
  loading: false,
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData(state, payload) {
      const { user, token } = payload;
      state.userData = user;
      state.token = token;
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("userData", JSON.stringify(user));
    },
  },
  extraReducers(builder) {
    // Sign up
    builder.addCase(signUp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      state.loading = false;
      authSlice.caseReducers.setUserData(state, payload);
    });
    builder.addCase(signUp.rejected, (state) => {
      state.loading = false;
    });
    // Login
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.loading = false;
      authSlice.caseReducers.setUserData(state, payload);
    });
    builder.addCase(login.rejected, (state) => {
      state.loading = false;
    });
  },
});

// export {} = authSlice.actions
export default authSlice.reducer;
