import { LayoutState } from './types'

import { HYDRATE } from 'next-redux-wrapper'

export const ActionTypes = {
  HYDRATE: HYDRATE,
  INIT_CONFIG: "INIT_CONFIG",
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
    type: ActionTypes.LAYOUT,
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
