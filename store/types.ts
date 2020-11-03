export interface LayoutState {
  footer: boolean
  header: boolean
}

export interface ConfigState {
  name: string
  description: string
  year: string
  url: string
}

export interface RootState {
  config: ConfigState
  layout: LayoutState
}
