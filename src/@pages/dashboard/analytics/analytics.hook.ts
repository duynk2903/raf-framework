import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { themeSettingsState } from '@core/components/ngx-theme-setting/setting.recoil'

/**
 * Dashboard hooks
 */
const useDashboardAnalytics = () => {
  const themeSettings = useRecoilValue(themeSettingsState)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1200)
  }, [])

  return { themeSettings, isLoading }
}

export { useDashboardAnalytics }
