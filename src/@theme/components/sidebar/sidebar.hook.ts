import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { sidebarSelector } from '@core/components/ngx-app/app.recoil'
import { theme } from 'antd'

/**
 * Use sidebar hooks
 */
const useSideBar = () => {
  const [sidebarState, setSidebarState] = useRecoilState(sidebarSelector)
  const {
    token: { colorBgContainer }
  } = theme.useToken()

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
    sidebarState,
    colorBgContainer
  }
}

export { useSideBar }
