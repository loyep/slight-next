import { LayoutState } from './types'

export const actionTypes = {
  INIT_CONFIG: "INIT_CONFIG",
  CHECK_USER_STATUS: "CHECK_USER_STATUS",
  LAYOUT: "LAYOUT",
}

export function toggleHeaderVisible(visible?: boolean) {
  console.log(visible)
  return {
    type: "HEADER",
    visible
  }
}

export function updateLayout(layout: LayoutState) {
  return {
    type: actionTypes.LAYOUT,
    payload: layout
  }
}

export function toggleFooterVisible(visible?: boolean) {
  console.log(visible)
  return {
    type: "FOOTER",
    visible
  }
}
