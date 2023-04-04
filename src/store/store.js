import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import devToolsEnhancer from "remote-redux-devtools";
import user from "./user/userSlice";
import products from "./products/productSlice";

const reducer = combineReducers({
  // here we will be adding reducers
  user,
  products,
});

const store = configureStore({
  reducer,
  devTools: [devToolsEnhancer({ realtime: true })],
});
export default store;
