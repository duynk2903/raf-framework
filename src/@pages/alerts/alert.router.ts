import { RouterModel } from '@core/components/ngx-navigator/navigator.type'
import { AlertRouterLink } from '@core/enums/router.enum'

/**
 * Alert router module configuration
 */
const alertRouterModule: RouterModel[] = [
  {
    path: AlertRouterLink.BASE_PATH,
    lazy: async () => {
      const { AlertLayout } = await import('@pages/alerts/alert.module')
      return { Component: AlertLayout }
    },
    handle: {
      title: 'menu.breadcrumb.alert.title'
    },
    children: [
      {
        path: AlertRouterLink.BASIC,
        lazy: async () => {
          const { BasicAlertComponent } = await import('@pages/alerts/alert.module')
          return { Component: BasicAlertComponent }
        },
        handle: {
          title: 'menu.breadcrumb.alert.children.basic'
        }
      },
      {
        path: AlertRouterLink.POPUP,
        lazy: async () => {
          const { AlertPopup } = await import('@pages/alerts/alert.module')
          return { Component: AlertPopup }
        },
        handle: {
          title: 'menu.breadcrumb.alert.children.popup'
        }
      }
    ]
  }
]

export { alertRouterModule }
