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
import '@core/configs/i18n.config'
import '@core/configs/interceptor.config'
import '@theme/styles/theme.scss'

/**
 * NgxApplication component
 * @constructor
 */
const NgxApplication: FC = () => {
  const { queryClient, themeSettings, localization } = useApplication()
  return (
    <StyleProvider transformers={[legacyLogicalPropertiesTransformer]} hashPriority={'high'}>
      <ConfigProvider theme={themeConfig(themeSettings)} locale={localization?.localTranslate}>
        <CookiesProvider>
          <QueryClientProvider client={queryClient}>
            <NgxPreloader />
            <NgxNavigator />
            <ReactQueryDevtools initialIsOpen={false} />
            <NgxThemeSettings />
          </QueryClientProvider>
        </CookiesProvider>
      </ConfigProvider>
    </StyleProvider>
  )
}

export default NgxApplication
