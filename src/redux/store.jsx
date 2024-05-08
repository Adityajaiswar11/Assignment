import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/Users"

export const store = configureStore({
  reducer:userReducer,
})