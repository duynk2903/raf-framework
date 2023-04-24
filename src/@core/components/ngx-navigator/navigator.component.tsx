import React, { FC } from 'react'
import { applicationEnvironmentVariable } from '@core/configs/env.config'
import { routerConfigs } from '@core/configs/router.config'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/**
 * Common ngx navigation component
 * @constructor
 */
const NgxNavigator: FC = () => {
  const routerConfigMapWithTranslate = routerConfigs()
  const { basePath } = applicationEnvironmentVariable()
  const router = createBrowserRouter(routerConfigMapWithTranslate, {
    basename: basePath
  })
  return <RouterProvider router={router} />
}

export default NgxNavigator
