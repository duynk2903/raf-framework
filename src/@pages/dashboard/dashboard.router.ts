import { DashboardRouterLink } from '@core/enums/router.enum'
import { RouterModel } from '@core/components/ngx-navigator/navigator.type'

/**
 * Dashboard routes
 */
const dashboardRouterModule: RouterModel[] = [
  {
    path: DashboardRouterLink.BASE_PATH,
    async lazy() {
      const { DashboardLayout } = await import('@pages/dashboard/dashboard.module')
      return { Component: DashboardLayout }
    },
    children: [
      {
        path: DashboardRouterLink.ANALYTIC,
        async lazy() {
          const { DashboardAnalytic } = await import('@pages/dashboard/dashboard.module')
          return { Component: DashboardAnalytic }
        }
      }
    ]
  }
]

export { dashboardRouterModule }
