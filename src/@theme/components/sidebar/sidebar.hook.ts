import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { sidebarSelector } from '@core/components/ngx-app/app.recoil'

/**
 * Use sidebar hooks
 */
const useSideBar = () => {
  const [sidebarState, setSidebarState] = useRecoilState(sidebarSelector)

  /**
   * Handle break point screen width change and set auto collapse sidebar
   */
  const handleAutoBreakPointResponsive = useCallback(
    (isBreak: boolean) => {
      setSidebarState({
        ...sidebarState,
        collapsed: isBreak
      })
    },
    [sidebarState]
  )

  return {
    handleAutoBreakPointResponsive,
    sidebarState
  }
}

export { useSideBar }
