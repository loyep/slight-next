import { AnyAction } from 'redux';
import type { RootState } from './types'
import { ActionTypes } from './actions'

export const initialState: RootState = {
  title: '',
  layout: {
    header: true,
    footer: true
  }
}

// create your reducer
export const reducer = (state: RootState = initialState, action: AnyAction) => {
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
