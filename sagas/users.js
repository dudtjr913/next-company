import { takeLatest, all, put, fork, delay } from 'redux-saga/effects';
import faker from 'faker';
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  FOLLOWING_REQUEST,
} from '../reducers/user';

/* function logInApi(data){
    return axios.post('/api/logInApi', data)
} */

function* logIn(action) {
  try {
    // const result = yield call(logInApi(action.data));
    yield delay(1000);
    yield put({
      type: LOG_IN_SUCCESS,
      data: {
        Id: action.data,
        nickname: faker.name.findName(),
      },
    });
  } catch (error) {
    yield put({
      type: LOG_IN_FAILURE,
      error: error.response.data,
    });
  }
}

/* function logOutApi(data){
    return axios.post('/api/logOutApi', data)
} */

function* logOut() {
  try {
    // const result = yield call(logOutApi(action.data));
    yield delay(1000);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: error.response.data,
    });
  }
}

/* function followingApi(data){
    return axios.post('/api/followingApi', data)
} */

function* following(action) {
  try {
    // const result = yield call(followingApi(action.data));
    yield delay(1000);
    yield put({
      type: FOLLOWING_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: FOLLOWING_FAILURE,
      error: error.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchFollowing() {
  yield takeLatest(FOLLOWING_REQUEST, following);
}

export default function* saga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchFollowing)]);
}
