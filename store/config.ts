import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import rootReducer, { RootState } from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      // Ignore these action types
      ignoredActions: ["search/handleSearch"],
      // Ignore these field paths in all actions
      ignoredActionPaths: ["meta.arg", "payload.timestamp"],
      // Ignore these paths in the state
      ignoredPaths: ["items.dates"],
    },
  }),
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

export default store;
