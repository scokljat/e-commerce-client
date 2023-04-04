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

const slice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: localStorage.getItem("token") ? true : false,
  },
  reducers: {},
  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      localStorage.setItem("token", action.payload);
      state.isLoggedIn = true;
    },
  },
});
export default slice.reducer;
