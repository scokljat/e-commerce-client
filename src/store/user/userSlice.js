import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UsersServices from "../../api/services/Users";
import { showToastMessage } from "../../components/toast/Toast";

export const registerUser = createAsyncThunk("register", async (user) => {
  try {
    const res = await UsersServices.registerUser(user);

    return res.data;
  } catch (error) {
    showToastMessage("Something went wrong, try again!", "error");
  }
});

export const loginUser = createAsyncThunk("login", async (user) => {
  try {
    const res = await UsersServices.loginUser(user);

    return res.data;
  } catch (error) {
    showToastMessage("Something went wrong, try again!", "error");
  }
});

export const getUserById = createAsyncThunk("getUserById", async (id) => {
  try {
    const res = await UsersServices.getUserById(id);

    return res.data;
  } catch (error) {
    showToastMessage("Something went wrong!", "error");
  }
});

export const editUser = createAsyncThunk("editUser", async (user) => {
  try {
    const res = await UsersServices.editUser(user);

    return res.data;
  } catch (error) {
    showToastMessage("Something went wrong, try again!", "error");
  }
});

export const editUserPassword = createAsyncThunk(
  "editUserPassword",
  async (user) => {
    try {
      const res = await UsersServices.editUserPassword(user);
      showToastMessage("Password has been successfully edited", "success");
      return res.data;
    } catch (error) {
      showToastMessage(error.response.data, "error");
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
      showToastMessage("You are successfully logged out", "success");
    },
  },
  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      if (action.payload) {
        localStorage.setItem("token", action.payload);
        state.isLoggedIn = true;
        showToastMessage("You are successfully registered", "success");
      }
    },
    [loginUser.fulfilled]: (state, action) => {
      if (action.payload) {
        localStorage.setItem("token", action.payload);
        state.isLoggedIn = true;
        showToastMessage("You are successfully logged in", "success");
      }
    },
    [getUserById.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [editUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      showToastMessage("User has been successfully edited", "success");
    },
  },
});

export const { logout } = slice.actions;
export default slice.reducer;
