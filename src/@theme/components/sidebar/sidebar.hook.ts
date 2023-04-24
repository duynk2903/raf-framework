import { sidebarConfigs } from '@core/configs/sidebar.config'
import { theme } from 'antd'
import { useCallback, useMemo } from 'react'
import { useRecoilState } from 'recoil'
import { sidebarSelector } from '@core/components/ngx-app/app.recoil'
import { useTranslation } from 'react-i18next'
import { TranslateEnum } from '@core/enums/translate.enum'

/**
 * Use sidebar hooks
 */
const useSideBar = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  const [sidebarState, setSidebarState] = useRecoilState(sidebarSelector)
  const { t: translate } = useTranslation([TranslateEnum.MENU])
  const listMenuSidebar = useMemo(() => sidebarConfigs(translate), [translate])

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
    listMenuSidebar,
    colorBgContainer,
    handleAutoBreakPointResponsive,
    sidebarState
  }
}

export { useSideBar }
