import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import { ActionTypes } from './actions'

// function* runClockSaga() {
//   yield take(actionTypes.START_CLOCK)
//   while (true) {
//     yield put(tickClock(false))
//     yield delay(1000)
//   }
// }

// function* loadDataSaga() {
//   try {
//     const res = yield fetch('https://jsonplaceholder.typicode.com/users')
//     const data = yield res.json()
//     yield put(loadDataSuccess(data))
//   } catch (err) {
//     yield put(failure(err))
//   }
// }

// function* initialState() {
//   yield take(actionTypes.INIT_LAYOUT)
// }

function* rootSaga() {
  console.log('ff')
  // yield all([
    // takeLatest(actionTypes.INIT_LAYOUT)
    // takeLatest(actionTypes.LOAD_DATA, loadDataSaga),
  // ])
}

export default rootSaga
