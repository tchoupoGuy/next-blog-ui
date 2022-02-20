import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RequestState } from "./types";

export const initialState: RequestState = {
  requestStart: false,
  requestSuccess: {},
  requestError: undefined,
};
const requestSlice = createSlice({
  name: "requestNext",
  initialState,
  reducers: {
    start: (state, _action: PayloadAction<any>) => {
      state.requestStart = true;
      state.requestError = undefined;
    },
    success: (state, action: PayloadAction<any>) => {
      state.requestSuccess = action.payload;
      state.requestStart = false;
      state.requestError = undefined;
    },
    error: (state, action: PayloadAction<Error>) => {
      state.requestStart = false;
      state.requestError = action.payload;
    },
  },
});

export const requestNextActions = requestSlice.actions;
export default requestSlice.reducer;
