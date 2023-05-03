import React, { FC } from 'react'
import { StyleProvider, legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs'
import { ConfigProvider } from 'antd'
import { themeConfig } from '@core/configs/theme.config'
import { CookiesProvider } from 'react-cookie'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useApplication } from '@core/components/ngx-app/app.hook'
import NgxPreloader from '@core/components/ngx-preloader/peloader.component'
import NgxNavigator from '@core/components/ngx-navigator/navigator.component'
import NgxThemeSettings from '@core/components/ngx-theme-setting/setting.component'
import i18n from '@core/configs/i18n.config'
import '@core/configs/interceptor.config'
import '@theme/styles/theme.scss'
import { I18nextProvider } from 'react-i18next'
import NgxDevtools from '@core/components/ngx-devtools/devtools.component'

/**
 * NgxApplication component
 * @constructor
 */
const NgxApplication: FC = () => {
  const { queryClient, themeSettings, localization, isDevelopment } = useApplication()
  return (
    <StyleProvider transformers={[legacyLogicalPropertiesTransformer]} hashPriority={'high'}>
      <ConfigProvider theme={themeConfig(themeSettings)} locale={localization?.localTranslate}>
        <CookiesProvider>
          <QueryClientProvider client={queryClient}>
            <I18nextProvider i18n={i18n}>
              <NgxPreloader />
              <NgxNavigator />
              <ReactQueryDevtools initialIsOpen={false} />
              <NgxDevtools isOpenDevTools={isDevelopment} />
              <NgxThemeSettings />
            </I18nextProvider>
          </QueryClientProvider>
        </CookiesProvider>
      </ConfigProvider>
    </StyleProvider>
  )
}

export default NgxApplication
