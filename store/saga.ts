import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import { actionTypes } from './actions'

function* runCheckUserStatus() {
  while (true) {
    console.log(new Date())
    yield delay(1000)
  }
}

function* rootSaga() {
  // yield all([
  // call(runCheckUserStatus)
  // ])
}

export default rootSaga
