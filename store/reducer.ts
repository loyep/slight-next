import { AnyAction, Reducer } from 'redux';
import type { RootState } from './types'
import config from '~/config'
import { actionTypes } from './actions'
import { HYDRATE } from 'next-redux-wrapper'

export const initialState: RootState = {
  config: { ...config },
  layout: {
    header: true,
    footer: true
  }
}

// create your reducer
export const reducer: Reducer<RootState, AnyAction> = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case actionTypes.LAYOUT:
      return { ...state, layout: { ...action.payload } }
    case actionTypes.INIT_CONFIG:
      return { ...state, config: { ...action.payload } }
    default:
      return state;
  }
};
