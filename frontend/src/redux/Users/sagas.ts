import { call, put, takeEvery } from 'redux-saga/effects';
import { ActionType, getType } from 'typesafe-actions';
import { makeGetRequest } from 'services/networking/request';

import { fetchUsers } from './actions';

function delay(duration: number) {
  const promise = new Promise(resolve => {
    setTimeout(() => resolve(true), duration);
  });
  return promise;
}

// worker Saga: will be fired on USER_FETCH_REQUEST actions
export function* fetchUserSaga(action: ActionType<typeof fetchUsers.request>) {
  const endpoint = `http://localhost:8000/api/users`;
  try {
    const response = yield call(makeGetRequest, endpoint);
    yield put(fetchUsers.success({ users: response.users }));

    // wait for 1 second before the next polling
    yield call(delay, 1000);
    yield put(fetchUsers.request({}));
  } catch (error) {
    yield put(fetchUsers.failure({ errorMessage: error.message }));
  }
}

export default function* avatarSagas() {
  yield takeEvery(getType(fetchUsers.request), fetchUserSaga);
}
