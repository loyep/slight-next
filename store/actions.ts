export enum actionTypes {
  HEADER = "HEADER",
  FOOTER = "FOOTER",
  INIT_LAYOUT ="INIT_LAYOUT"
}

export function toggleHeaderVisible(visible?: boolean) {
  console.log(visible)
  return {
    type: "HEADER",
    visible
  }
}

export function toggleFooterVisible(visible?: boolean) {
  console.log(visible)
  return {
    type: "FOOTER",
    visible
  }
}
