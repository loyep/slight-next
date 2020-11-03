

import { createStore, applyMiddleware, Store, AnyAction, Reducer } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware, { Task } from 'redux-saga';
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';
import { reducer } from './reducer'
import { RootState } from './types'
import rootSaga from './saga';
import config from '@/config'

export interface SagaStore extends Store {
  sagaTask?: Task;
}

export const initialState: RootState = {
  config: { ...config },
  layout: {
    header: true,
    footer: true
  }
}

export const makeStore: MakeStore<RootState> = (context: Context) => {
  const sagaMiddleware = createSagaMiddleware()
  const logger = createLogger()
  const store: SagaStore = createStore(reducer, initialState, applyMiddleware(sagaMiddleware, logger))
  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store;
}

export const wrapper = createWrapper<RootState, AnyAction>(makeStore, { debug: true });