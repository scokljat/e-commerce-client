import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import devToolsEnhancer from "remote-redux-devtools";
import user from "./user/userSlice";
import products from "./products/productSlice";

const reducer = combineReducers({
  user,
  products,
});

const store = configureStore({
  reducer,
  devTools: [devToolsEnhancer({ realtime: true })],
});
export default store;
