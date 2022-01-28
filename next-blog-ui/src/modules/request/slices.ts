import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RequestState } from "./types";

export const initialState: RequestState = {
  start: {},
  success: {},
  error: {},
};
const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {
    start: (state, action: PayloadAction<any>) => {
      state.start = action;
    },
    success: (state, action: PayloadAction<any>) => {
      state.success = action;
    },
    error: (state, action: PayloadAction<Error>) => {
      state.error = action;
    },
  },
});

export const { error, start, success } = requestSlice.actions;
export default requestSlice.reducer;
