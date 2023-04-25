import { AuthorizationModel } from '@core/models/authorization.model'

export interface NgxApplicationState {
  authorization: AuthorizationModel
  sidebar: SidebarState
  isLoading: boolean
}

export interface SidebarState {
  collapsed: boolean
  isEnabled: boolean
  selectedKey: string[]
  openKeys: string[]
}
