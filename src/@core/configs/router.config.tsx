import { RouterModel } from '@core/components/ngx-navigator/navigator.type'
import RouterGuard from '@core/components/ngx-route-guard/guard.component'
import PrimaryLayout from '@theme/layouts/primary/primary.component'
import { AuthRouterLink, ErrorRouterLink, RouterLink } from '@core/enums/router.enum'
import Dashboard from '@pages/dashboard/dashboard.component'
import AuthLayout from '@theme/layouts/auth/auth.component'
import Login from '@pages/login/login.component'
import ErrorLayout from '@pages/error/error.component'
import NotFound from '@pages/error/404/notfound.component'
import { Navigate } from 'react-router-dom'
import Forbidden from '@pages/error/403/forbidden.component'
import InternalServerError from '@pages/error/500/server-error.component'

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
        index: true,
        path: RouterLink.HOME,
        element: <Dashboard />
      },
      {
        path: ErrorRouterLink.BASE_PATH,
        element: <ErrorLayout />,
        handle: {
          title: 'menu.breadcrumb.error.title'
        },
        children: [
          {
            path: ErrorRouterLink.NOT_FOUND,
            element: <NotFound />,
            handle: {
              title: 'menu.breadcrumb.error.children.notfound'
            }
          },
          {
            path: ErrorRouterLink.FORBIDDEN,
            element: <Forbidden />,
            handle: {
              title: 'menu.breadcrumb.error.children.forbidden'
            }
          },
          {
            path: ErrorRouterLink.INTERNAL_SERVER_ERROR,
            element: <InternalServerError />,
            handle: {
              title: 'menu.breadcrumb.error.children.serverError'
            }
          }
        ]
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
      },
      {
        path: '*',
        element: <Login />
      }
    ]
  },
  {
    path: ErrorRouterLink.MATCH_PATH,
    element: <Navigate to={'/errors/404'} />
  }
]

export { routerConfigs }
