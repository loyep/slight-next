import { actionTypes } from './actions'
import { HYDRATE } from 'next-redux-wrapper'
import { RootState } from './index'

export const initialState: RootState = {
  header: true,
  footer: true
}

function reducer(state: RootState, action: any) {
  console.log('state', state)
  switch (action.type) {
    case actionTypes.INIT_LAYOUT:
      return {
        ...state,
        ...initialState
      }

    case actionTypes.HEADER:
      console.log(action)
      return {
        ...state,
        ...{ header: action.visible },
      }

    case actionTypes.FOOTER:
      console.log(action)
      return {
        ...state,
        ...{ footer: action.visible },
      }

    default:
      return state
  }
}

export default reducer