import * as API from "../../api";
import { call, put, takeLatest } from "@redux-saga/core/effects";

const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";

export const loginrequest = (user) => ({ type : LOGIN, payload: user });

function* login(action) {
    const param = action.payload;
  try {
    const res = yield call(API.Login, param);
    yield put({
      type: LOGIN_SUCCESS,
      data: res,
    });
  } catch (err) {
    yield put({
      type: LOGIN_ERROR,
      error: err,
    });
  }
}

export function* userSaga() {
    yield takeLatest(LOGIN, login)
}

const initialState = {
  user: null,
  Loading: false,
  Success: false,
  Error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        Loading: true,
        Success: false,
        Error: null,
      };
    case LOGIN_SUCCESS:
      return {
        Loading: false,
        Success: true,
        Error: null,
        user: action.data,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        Loading: false,
        Success: false,
        Error: action.error,
      };

    default:
      return state;
  }
}
