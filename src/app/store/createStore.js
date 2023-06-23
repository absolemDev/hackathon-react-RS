import { configureStore } from "@reduxjs/toolkit";
import teamReducer from "./team";

export function createStore() {
  return configureStore({
    reducer: teamReducer
  });
}
