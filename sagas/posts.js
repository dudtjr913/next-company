import { takeLatest, all, put, fork, delay } from 'redux-saga/effects';
import {
  UPLOAD_POST_REQUEST,
  UPLOAD_POST_SUCCESS,
  UPLOAD_POST_FAILURE,
  UPLOAD_COMMENT_REQUEST,
  UPLOAD_COMMENT_SUCCESS,
  UPLOAD_COMMENT_FAILURE,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
  REMOVE_POST_FAILURE,
} from '../reducers/post';

/* function uploadPostApi(data) {
  return axios.post('/api/uploadPostApi', data);
} */

function* uploadPost(action) {
  try {
    // const result = yield call(uploadPostApi(action.data))
    yield delay(1000);
    yield put({
      type: UPLOAD_POST_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield delay(1000);
    yield put({
      type: UPLOAD_POST_FAILURE,
      error: err.response.data,
    });
  }
}

/* function uploadCommentApi(data) {
  return axios.post('/api/uploadCommentApi', data);
} */

function* uploadComment(action) {
  console.log(action.dta);
  try {
    // const result = yield call(uploadCommentApi(action.data))
    yield delay(1000);
    yield put({
      type: UPLOAD_COMMENT_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield delay(1000);
    yield put({
      type: UPLOAD_COMMENT_FAILURE,
      error: err.response.data,
    });
  }
}

/* function removePostApi(data) {
  return axios.post('/api/removePostApi', data);
} */

function* removePost(action) {
  try {
    // const result = yield call(removePostApi(action.data))
    yield delay(1000);
    yield put({
      type: REMOVE_POST_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield delay(1000);
    yield put({
      type: REMOVE_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchUploadComment() {
  yield takeLatest(UPLOAD_COMMENT_REQUEST, uploadComment);
}

function* watchUploadPost() {
  yield takeLatest(UPLOAD_POST_REQUEST, uploadPost);
}

export default function* saga() {
  yield all([
    fork(watchUploadPost),
    fork(watchUploadComment),
    fork(watchRemovePost),
  ]);
}
