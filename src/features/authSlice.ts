import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

export interface AuthState {
  id: string | null;
  token: string | null;
  isMentor: boolean | null;
}

const initialState: AuthState = {
  id: null,
  token: null,
  isMentor: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state: any, action: PayloadAction<{ id: string; token: string; isMentor: boolean  }>) => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          token: action.payload.token,
          id: action.payload.id,
          isMentor: action.payload.isMentor,
        }),
      );
      localStorage.setItem("token", action.payload.token);

      localStorage.setItem("id", action.payload.id);
      localStorage.setItem("mentor", (JSON.stringify(action.payload.isMentor)));
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.isMentor = action.payload.isMentor;
    },
    logout: (state: any) => {
      localStorage.clear();
      state.id = null;
      state.token = null;
      state.isMentor = null;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;
export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
