import { AnyAction, Reducer } from 'redux';
import type { RootState } from './types'
import { ActionTypes } from './actions'

// create your reducer
export const reducer: Reducer<RootState, AnyAction> = (state, action) => {
  console.log(action)
  switch (action.type) {
    case ActionTypes.HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return { ...state, ...action.payload };
    case ActionTypes.LAYOUT:
      return { ...state, layout: { ...action.payload } }
    default:
      return state;
  }
};
