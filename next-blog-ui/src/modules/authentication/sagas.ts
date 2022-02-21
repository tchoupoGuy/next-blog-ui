import { put, select, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { SignInModel } from "./types";
import { requestSequence } from "../request";
import { signIn } from "./services/auth-services";
import { authNextActions } from "./slices";

function* handleSingInRequest({ payload }: PayloadAction<SignInModel>) {
  const { response, error } = yield requestSequence(signIn, payload);
  if (error) {
    console.log(error);
  } else {
    yield put(authNextActions.handleSignInSuccess(response));
    yield put(authNextActions.setToken(response.token));
  }
}

export function* watchHandleSignInRequest() {
  yield takeLatest(authNextActions.handleSignInStart, handleSingInRequest);
}
