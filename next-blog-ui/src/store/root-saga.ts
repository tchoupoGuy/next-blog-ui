import { all, call, spawn } from "redux-saga/effects";

const sagas: any[] = [];

// https://redux-saga.js.org/docs/advanced/RootSaga.html
export default function* rootSaga() {
  yield all(
    sagas.map((saga) =>
      spawn(function* sagaExecution() {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            if (process.env.NODE_ENV !== "production") {
              console.error("[ROOT_SAGA_ERROR]", e);
            }
          }
        }
      })
    )
  );
}
