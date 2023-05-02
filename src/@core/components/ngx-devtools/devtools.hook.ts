import { useCallback, useState } from 'react'
import { DevToolsState } from '@core/components/ngx-devtools/devtools.type'
import { produce } from 'immer'

/**
 * Use dev tool hook
 */
const useDevTools = () => {
  const [devToolsState, setDevToolsState] = useState<DevToolsState>({
    isOpen: false,
    itemState: {
      isOpenChatBox: false,
      isOpenFormBuilder: false,
      isOpenSkeletonBuilder: false
    }
  })
  const handleOpenDevTools = useCallback((isOpen: boolean) => {
    setDevToolsState(
      produce(devToolsState, (draft) => {
        draft.isOpen = isOpen
      })
    )
  }, [])

  /**
   * Handle open AI chat box
   */
  const handleOpenChatBox = useCallback((isOpen: boolean) => {
    setDevToolsState(
      produce(devToolsState, (draft) => {
        draft.itemState = {
          ...devToolsState.itemState,
          isOpenChatBox: isOpen
        }
      })
    )
  }, [])

  /**
   * Handle open form builder
   */
  const handleOpenFormBuilder = useCallback((isOpen: boolean) => {
    setDevToolsState(
      produce(devToolsState, (draft) => {
        draft.itemState = {
          ...devToolsState.itemState,
          isOpenFormBuilder: isOpen
        }
      })
    )
  }, [])

  return {
    handleOpenDevTools,
    handleOpenChatBox,
    handleOpenFormBuilder,
    ...devToolsState
  }
}

export { useDevTools }
