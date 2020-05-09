import { put, takeEvery, all } from 'redux-saga/effects';
import { FETCH_USERS, USERS_FETCHING_SUCCESS, USERS_FETCHING_FAILED } from './types';

function* fetchUsers() {
  try {
    const response = yield fetch(
      'https://gorest.co.in/public-api/users?_format=json&access-token=gnmLS6D7LX03eiadumz5CsMRQq5HR0PUa5VZ'
    ).then((response) => response.json());
    yield put({ type: USERS_FETCHING_SUCCESS, payload: response.result });
  } catch (e) {
    yield put({ type: USERS_FETCHING_FAILED, payload: e });
  }
}

function* actionWatcher() {
  yield takeEvery(FETCH_USERS, fetchUsers);
}

export default function* usersSaga() {
  yield all([actionWatcher()]);
}
