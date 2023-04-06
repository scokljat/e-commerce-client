import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UsersServices from "../../api/services/Users";

export const registerUser = createAsyncThunk("register", async (user) => {
  try {
    const res = await UsersServices.registerUser(user);

    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const loginUser = createAsyncThunk("login", async (user) => {
  try {
    const res = await UsersServices.loginUser(user);

    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const getUserById = createAsyncThunk("getUserById", async (id) => {
  try {
    const res = await UsersServices.getUserById(id);

    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const slice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: localStorage.getItem("token") ? true : false,
    user: {},
  },
  reducers: {},
  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      if (action.payload) {
        localStorage.setItem("token", action.payload);
        state.isLoggedIn = true;
      }
    },
    [loginUser.fulfilled]: (state, action) => {
      if (action.payload) {
        localStorage.setItem("token", action.payload);
        state.isLoggedIn = true;
      }
    },
    [getUserById.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
  },
});
export default slice.reducer;
