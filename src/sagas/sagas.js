import { put, all, take, takeEvery, actionChannel, delay, select } from 'redux-saga/effects';

import * as actions from '../actions/actions';

function* makeDrinksSaga() {
  const requestChan = yield actionChannel(actions.MAKE_DRINKS_REQUEST);
  while (true) {
    yield take(requestChan);
    const state = yield select();
    if (state.baristaQueue.length) {
      const drink = state.baristaQueue[0];
      yield delay(drink.prepTime);
      yield put(actions.makeDrinksSuccess());
      yield put(actions.pickupDrinkRequest());
    }
  }
}

function* pickupDrinksSaga() {
  const requestChan = yield actionChannel(actions.PICKUP_DRINK_REQUEST);
  while (true) {
    yield take(requestChan);
    const state = yield select();
    if (state.counterItems.length) {
      yield delay(3000);
      yield put(actions.pickupDrinkSuccess());
    }
  }
}

function* createDrink({ drink }) {
  yield put(actions.createDrinkSuccess(drink));
  yield put(actions.makeDrinksRequest());
}

function* createDrinkSaga() {
  yield takeEvery(actions.CREATE_DRINK_REQUEST, createDrink);
}

export default function* rootSaga() {
  yield all([
    createDrinkSaga(),
    makeDrinksSaga(),
    pickupDrinksSaga(),
  ]);
}
