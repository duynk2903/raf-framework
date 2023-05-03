import { QueryClient } from '@tanstack/react-query'
import { useRecoilValue } from 'recoil'
import { themeSettingsState } from '@core/components/ngx-theme-setting/setting.recoil'
import AOS from 'aos'
import { useEffect, useState } from 'react'
import { ThemeStyle } from '@core/enums/theme.enum'
import { getCurrentLanguage } from '@core/helpers/i18n.helper'
import { LocalizationDateModel } from '@core/models/localization-date.model'
import { Builder } from '@core/helpers/builder.helper'
import { TranslateLanguageEnum } from '@core/enums/translate.enum'
import { listLocales } from '@core/configs/i18n.config'
import { useTranslation } from 'react-i18next'
import { ActiveEnvironmentProfile } from '@core/enums/env.enum'

/**
 * Use application hook
 */
const useApplication = () => {
  const { i18n } = useTranslation()
  const isDevelopment = process.env.NODE_ENV === ActiveEnvironmentProfile.DEVELOPMENT
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        useErrorBoundary: false
      },
      mutations: {
        useErrorBoundary: false
      }
    }
  })

  // Theme settings
  const themeSettings = useRecoilValue(themeSettingsState)

  // Localization configuration
  const [localization, setLocalization] = useState<LocalizationDateModel>(
    Builder<LocalizationDateModel>().lang(TranslateLanguageEnum.KOREA).localTranslate(listLocales.kr).build()
  )

  /**
   * Init animation
   */
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])

  /**
   * Effect change language and set localization config for ant design
   */
  useEffect(() => {
    setLocalization({
      lang: getCurrentLanguage(),
      localTranslate: listLocales[i18n.language]
    })
  }, [i18n.language])

  /**
   * Effect add class dark or light to body class
   */
  useEffect(() => {
    const bodyClass = document.body.classList
    const classMode = themeSettings.mode === ThemeStyle.DARK ? ThemeStyle.DARK : ThemeStyle.LIGHT
    if (bodyClass && bodyClass.length > 0) {
      bodyClass.remove(ThemeStyle.DARK)
      bodyClass.remove(ThemeStyle.LIGHT)
      bodyClass.add(classMode)
    } else {
      bodyClass.add(classMode)
    }
  }, [themeSettings?.mode])

  return {
    queryClient,
    themeSettings,
    localization,
    isDevelopment
  }
}

export { useApplication }
