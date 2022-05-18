import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import user from "./user";


const store = configureStore({
  reducer: {
    user,

  },

  devTools: process.env.URL === "development",
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
