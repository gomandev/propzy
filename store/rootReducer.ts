import { combineReducers } from "@reduxjs/toolkit";
import { commitSlice } from "./ducks/commit";

const rootReducer = combineReducers({
  product: commitSlice.reducer,
});

export type RootState = ReturnType<typeof Object>;

export default rootReducer;
