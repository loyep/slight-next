

import { createStore, applyMiddleware, Middleware, AnyAction } from 'redux';
import createSagaMiddleware, { Task } from 'redux-saga';
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';
import { reducer, initialState } from './reducer'
import { RootState } from './types'
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware()

const bindMiddleware = (middleware: Middleware<any, any, any>[] = []) => {
  console.log(process.env.NODE_ENV)
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { composeWithDevTools } = require('redux-devtools-extension')
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { createLogger } = require('redux-logger');
    const logger = createLogger()
    middleware.push(logger)
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

export const makeStore: MakeStore<RootState> = (context: Context) => {
  if (typeof window == "undefined") {
    console.log("undefined")
  } else {
    console.log('window')
  }
  console.log('wrapper', wrapper)
  console.log('makeStore')
  const store = createStore(reducer, initialState, bindMiddleware([sagaMiddleware]))
  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store;
}

export const wrapper = createWrapper<RootState, AnyAction>(makeStore, { debug: true });