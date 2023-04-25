import { theme } from 'antd'
import { useRecoilValue } from 'recoil'
import { applicationState, sidebarSelector } from '@core/components/ngx-app/app.recoil'

/**
 * Use primary layout hook
 */
const usePrimaryLayout = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  const sidebarState = useRecoilValue(sidebarSelector)
  const appState = useRecoilValue(applicationState)
  const { isLoading } = appState

  return {
    colorBgContainer,
    isLoading,
    ...sidebarState
  }
}

export { usePrimaryLayout }
