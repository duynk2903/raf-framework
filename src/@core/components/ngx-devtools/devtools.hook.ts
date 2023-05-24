import { useCallback, useRef, useState } from 'react'
import { DevToolsState } from '@core/components/ngx-devtools/devtools.type'
import { produce } from 'immer'
import { useTranslation } from 'react-i18next'
import { TranslateEnum } from '@core/enums/translate.enum'

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
  const { t: translate } = useTranslation([TranslateEnum.DEVTOOLS])
  const devToolsRef = useRef(null)
  const formBuilderRef = useRef(null)
  const openAIRef = useRef(null)
  const skeletonBuilderRef = useRef(null)
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
    devToolsRef,
    openAIRef,
    formBuilderRef,
    skeletonBuilderRef,
    translate,
    ...devToolsState
  }
}

export { useDevTools }
