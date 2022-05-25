import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

export interface AuthState {
  id: string | null;
  token: string | null;
  mentor: boolean | null;
}

const initialState: AuthState = {
  id: null,
  token: null,
  mentor: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state: any, action: PayloadAction<{ id: string; token: string; mentor: boolean }>) => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          token: action.payload.token,
          id: action.payload.id,
          mentor: action.payload.mentor,
        }),
      );
      localStorage.setItem("token", action.payload.token);

      localStorage.setItem("id", action.payload.id);
      localStorage.setItem("mentor", JSON.stringify(action.payload.mentor));
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.mentor = action.payload.mentor;
    },
    logoutUser: (state: any) => {
      localStorage.clear();
      state.id = null;
      state.token = null;
      state.mentor = null;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;
export const { setUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
