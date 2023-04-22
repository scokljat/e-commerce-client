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

export const editUser = createAsyncThunk("editUser", async (user) => {
  try {
    const res = await UsersServices.editUser(user);

    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const editUserPassword = createAsyncThunk(
  "editUserPassword",
  async (user) => {
    console.log(user);
    try {
      const res = await UsersServices.editUserPassword(user);

      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const slice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: localStorage.getItem("token") ? true : false,
    user: {},
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.user = {};
      state.isLoggedIn = false;
    },
  },
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
    [editUser.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { logout } = slice.actions;
export default slice.reducer;
