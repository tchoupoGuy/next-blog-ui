import { put, call } from "redux-saga/effects";
import { error, start, success } from "./slices";

import { GenericObject } from "./types";

export function* requestSequence<Fn extends (...args: any[]) => Promise<any>>(
  requestCreator: string,
  requestFn: Fn,
  ...args: Parameters<Fn>
) {
  let action: GenericObject = {};
  try {
    // Send a REQUEST_START action to notify other sagas or reducers
    yield put(start(requestCreator));
    // Perform the request
    const result: GenericObject = yield call(requestFn, ...args);
    // Dispatch a REQUEST_SUCCESS action and also return it
    action = yield put(success(result)) as GenericObject;
    return action;
  } catch (err: any) {
    // Dispatch a REQUEST_ERROR action and return it
    action = yield put(error(err));
    return action;
  }
}
