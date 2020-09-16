import { call, put, all, take, takeEvery, takeLatest, delay, select } from 'redux-saga/effects';

import * as actions from '../actions/actions';

function* createDrink( drink ) {
  try {
    yield put(actions.createDrinkSuccess(drink));
  } catch (err) {
    console.log('get users error: ', err);
  }
}

function* createDrinkSaga() {
  yield takeEvery(actions.CREATE_DRINK_REQUEST, createDrink);
}

export default function* rootSaga() {
  yield all([
    createDrinkSaga(),
  ]);
}
