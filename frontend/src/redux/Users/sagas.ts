import { call, put, takeEvery } from 'redux-saga/effects';
import { ActionType, getType } from 'typesafe-actions';
import { makeGetRequest } from 'services/networking/request';

import client from 'services/networking/client';
import { fetchUsers } from './actions';

// worker Saga: will be fired on USER_FETCH_REQUEST actions
export function* fetchUserSaga(action: ActionType<typeof fetchUsers.request>) {
  const endpoint = `http://localhost:8000/api/users`;
  try {
    const response = yield call(makeGetRequest, endpoint);
    yield put(fetchUsers.success({ users: response.users }));
  } catch (error) {
    yield put(fetchUsers.failure({ errorMessage: error.message }));
  }
}

/*
  Behavior similar to redux-thunk
  Starts fetchUser on each dispatched `USER_FETCH_REQUEST` action.
  Allows concurrent fetches of user.
*/
export default function* avatarSagas() {
  yield takeEvery(getType(fetchUsers.request), fetchUserSaga);
}
