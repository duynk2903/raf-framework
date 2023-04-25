import { useCallback, useMemo, useState } from 'react'
import { useRecoilState } from 'recoil'
import { themeSettingsInitialState, themeSettingsState } from '@core/components/ngx-theme-setting/setting.recoil'
import { ThemeColorStyle, ThemeStyle } from '@core/enums/theme.enum'
import { useTranslation } from 'react-i18next'
import { TranslateEnum } from '@core/enums/translate.enum'
import { themeColors } from '@core/configs/theme.config'
import { applicationInitialState, applicationState, sidebarSelector } from '@core/components/ngx-app/app.recoil'

/**
 * Theme setting hook
 */
const useThemeSettings = () => {
  // Component state
  const [isOpen, setOpen] = useState(false)
  const [themeSettings, setThemeSettings] = useRecoilState(themeSettingsState)
  const [sidebar, setSidebar] = useRecoilState(sidebarSelector)
  const [appState, setAppState] = useRecoilState(applicationState)
  const { t: translate } = useTranslation([TranslateEnum.SETTINGS])
  const listThemeColors = useMemo(() => themeColors(translate), [translate])

  // Events handlers
  const handleOpenThemeSetting = useCallback(() => {
    setOpen(!isOpen)
  }, [isOpen])

  /**
   * Handle setting change theme events
   * @param mode Theme
   * @param style Theme style
   */
  const handleSettingTheme = useCallback(
    (mode: ThemeStyle, themeColor?: string) => {
      setThemeSettings({
        ...themeSettings,
        mode: mode ?? ThemeStyle.DARK,
        themeColor: themeColor ?? ThemeColorStyle.DAYBREAK_BLUE
      })
    },
    [themeSettings, setThemeSettings]
  )

  /**
   * Handle change the app settings
   */
  const handleChangeGlobalSpinner = useCallback(
    (isLoading: boolean) => {
      setAppState({
        ...appState,
        isLoading: isLoading ?? false
      })
    },
    [appState]
  )

  /**
   * Handle change the sidebar setting
   */
  const handleChangeNavigationMode = useCallback(
    (isTopNavigation: boolean) => {
      setSidebar({
        ...sidebar,
        isEnabled: isTopNavigation
      })
    },
    [sidebar]
  )

  /**
   * Reset theme settings to default values
   */
  const resetSettings = useCallback(() => {
    setAppState({
      ...appState,
      isLoading: applicationInitialState.isLoading,
      sidebar: applicationInitialState.sidebar
    })
    setThemeSettings(themeSettingsInitialState)
  }, [appState])

  /**
   * Export variables and state
   */
  return {
    isOpen,
    themeSettings,
    handleOpenThemeSetting,
    handleSettingTheme,
    translate,
    listThemeColors,
    appState,
    handleChangeGlobalSpinner,
    handleChangeNavigationMode,
    resetSettings
  }
}

export { useThemeSettings }
