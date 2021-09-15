import contact, { contactSaga } from "./modules/contact";
import user, { userSaga } from "./modules/user";
import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ contact, user });
export function* rootSaga() {
  yield all([contactSaga(), userSaga()]);
}

export default rootReducer;
