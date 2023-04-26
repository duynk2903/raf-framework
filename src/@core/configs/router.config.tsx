import { RouterModel } from '@core/components/ngx-navigator/navigator.type'
import RouterGuard from '@core/components/ngx-route-guard/guard.component'
import PrimaryLayout from '@theme/layouts/primary/primary.component'
import { AuthRouterLink, DashboardRouterLink, ErrorRouterLink, RouterLink } from '@core/enums/router.enum'
import AuthLayout from '@theme/layouts/auth/auth.component'
import Login from '@pages/login/login.component'
import { Navigate } from 'react-router-dom'
import { errorRouterModule } from '@pages/error/error.router'
import { dashboardRouterModule } from '@pages/dashboard/dashboard.router'

/**
 * Router application configuration
 * Auto generated breadcrumb from properties handle
 * Put key title translate to property title in handle
 */
const routerConfigs = (): RouterModel[] => [
  {
    element: (
      <RouterGuard>
        <PrimaryLayout />
      </RouterGuard>
    ),
    handle: {
      title: 'menu.breadcrumb.dashboard'
    },
    path: RouterLink.BASE_PATH,
    children: [
      {
        path: RouterLink.HOME,
        element: <Navigate to={`${DashboardRouterLink.BASE_PATH}/${DashboardRouterLink.ANALYTIC}`} replace />
      },
      ...dashboardRouterModule,
      ...errorRouterModule
    ]
  },
  {
    element: <AuthLayout />,
    path: AuthRouterLink.BASE_PATH,
    children: [
      {
        path: AuthRouterLink.LOGIN,
        element: <Login />
      },
      {
        path: '*',
        element: <Login />
      }
    ]
  },
  {
    path: ErrorRouterLink.MATCH_PATH,
    element: <Navigate to={ErrorRouterLink.DEFAULT_PAGE} />
  }
]

export { routerConfigs }
