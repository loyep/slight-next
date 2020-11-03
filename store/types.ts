export interface LayoutState {
  footer: boolean
  header: boolean
}

export interface RootState {
  title?: string
  layout: LayoutState
}
