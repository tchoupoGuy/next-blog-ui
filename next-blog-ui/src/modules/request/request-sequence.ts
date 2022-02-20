import { put, call } from "redux-saga/effects";
import { requestNextActions } from "./slices";

import { GenericObject } from "./types";

export function* requestSequence<Fn extends (...args: any[]) => Promise<any>>(
  requestFn: Fn,
  ...args: Parameters<Fn>
) {
  let action: GenericObject = {};
  try {
    // Send a REQUEST_START action to notify other sagas or reducers
    yield put(requestNextActions.start(action));
    // Perform the request
    const result: GenericObject = yield call(requestFn, ...args);
    // Dispatch a REQUEST_SUCCESS action and also return it
    action = yield put(requestNextActions.success(result)) as GenericObject;
    return action;
  } catch (err: any) {
    // Dispatch a REQUEST_ERROR action and return it
    action = yield put(requestNextActions.error(err));
    return action;
  }
}
