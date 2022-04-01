import { combineReducers } from "redux";
import requestNext from "@next/modules/request/slices";
import authNext from "@next/modules/authentication/slices";

export default combineReducers({
  authNext,
});
