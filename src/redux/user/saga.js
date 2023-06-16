import { put, takeLatest } from 'redux-saga/effects';
import { types } from './types';

function* getExample({payload}) {
  try {
      //perform the api call
      yield put({ type: types.GET_SUCCESS, payload: payload });
    } catch (error) {
    console.log(error);
  }
}

export default function* ExampleSaga() {
  yield takeLatest(types.GET_REQUEST, getExample);
}