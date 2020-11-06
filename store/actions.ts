import { LayoutState } from './types'

export const actionTypes = {
  INIT_CONFIG: "INIT_CONFIG",
  CHECK_USER_STATUS: "CHECK_USER_STATUS",
  LAYOUT: "LAYOUT",
}

export function updateLayout(layout: LayoutState) {
  return {
    type: actionTypes.LAYOUT,
    payload: layout
  }
}
