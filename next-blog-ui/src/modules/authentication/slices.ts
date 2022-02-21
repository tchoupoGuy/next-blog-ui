import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, SignInData, SignInModel } from "./types";

export const initialState: AuthState = {
  isSignItLoading: false,
  signInSuccess: undefined,
  signInError: undefined,
  token: "",
};
const authSlice = createSlice({
  name: "authNext",
  initialState,
  reducers: {
    handleSignInStart: (state, _action: PayloadAction<SignInModel>) => {
      state.isSignItLoading = true;
      state.signInError = undefined;
    },
    handleSignInSuccess: (state, action: PayloadAction<SignInData>) => {
      state.signInSuccess = action.payload;
      state.isSignItLoading = false;
      state.signInError = undefined;
    },
    handleSignInError: (state, action: PayloadAction<Error>) => {
      state.isSignItLoading = false;
      state.signInError = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const authNextActions = authSlice.actions;
export default authSlice.reducer;
