

import { createStore, AnyAction } from 'redux';
import { MakeStore, createWrapper, Context, HYDRATE } from 'next-redux-wrapper';

export interface RootState {
  header: boolean;
  footer: boolean;
}

const initialState: RootState = {
  header: true,
  footer: true
}

// create your reducer
const reducer = (state: RootState = initialState, action: AnyAction) => {
  console.log(action)
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return { ...state, ...action.payload };
    case 'HEADER':
      return { ...state, header: action.visible };
    case 'FOOTER':
      return { ...state, footer: action.visible };
    default:
      return state;
  }
};

// create a makeStore function
const makeStore: MakeStore<RootState> = (context: Context) => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper<RootState>(makeStore, { debug: true });