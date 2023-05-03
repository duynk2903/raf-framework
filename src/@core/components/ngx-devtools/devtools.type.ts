export interface DevToolsState {
  isOpen: boolean
  itemState: DevToolsItemState
}

export interface DevToolsItemState {
  isOpenChatBox: boolean
  isOpenSkeletonBuilder: boolean
  isOpenFormBuilder: boolean
}

export interface NgxDevToolsProps {
  isOpenDevTools: boolean
}
