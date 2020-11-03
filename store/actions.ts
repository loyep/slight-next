import { LayoutState } from './types'

export enum ActionTypes {
  LAYOUT = "LAYOUT",
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
