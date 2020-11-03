

import { createStore, applyMiddleware, Store } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware, { Task } from 'redux-saga';
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';
import { reducer } from './reducer'
import { RootState } from './types'
import rootSaga from './saga';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

// create a makeStore function
export const makeStore: MakeStore<RootState> = (context: Context) => {
  const sagaMiddleware = createSagaMiddleware();
  const logger = createLogger()
  const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger)) as SagaStore;
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}

// export an assembled wrapper
export const wrapper = createWrapper<RootState>(makeStore, { debug: true });