import { RouterModel } from '@core/components/ngx-navigator/navigator.type'
import RouterGuard from '@core/components/ngx-route-guard/guard.component'
import PrimaryLayout from '@theme/layouts/primary/primary.component'
import { AuthRouterLink, RouterLink } from '@core/enums/router.enum'
import Dashboard from '../../@page/dashboard/dashboard.component'
import NotFound from '@page/error/not-found/not-found.component'
import AuthLayout from '@theme/layouts/auth/auth.component'
import Login from '../../@page/login/login.component'

/**
 * Router application configuration
 */
const routerConfigs = (): RouterModel[] => [
  {
    element: (
      <RouterGuard>
        <PrimaryLayout />
      </RouterGuard>
    ),
    path: RouterLink.BASE_PATH,
    children: [
      {
        index: true,
        path: RouterLink.HOME,
        element: <Dashboard />
      }
    ]
  },
  {
    element: <AuthLayout />,
    path: AuthRouterLink.BASE_PATH,
    children: [
      {
        path: AuthRouterLink.LOGIN,
        element: <Login />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />,
    children: []
  }
]

export { routerConfigs }
