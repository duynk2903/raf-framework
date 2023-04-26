import { RouterModel } from '@core/components/ngx-navigator/navigator.type'
import { ErrorRouterLink } from '@core/enums/router.enum'

/**
 * Error routes module
 */
const errorRouterModule: RouterModel[] = [
  {
    path: ErrorRouterLink.BASE_PATH,
    async lazy() {
      const { ErrorLayout } = await import('@pages/error/error.module')
      return { Component: ErrorLayout }
    },
    handle: {
      title: 'menu.breadcrumb.error.title'
    },
    children: [
      {
        index: true,
        path: ErrorRouterLink.NOT_FOUND,
        async lazy() {
          const { NotFound } = await import('@pages/error/error.module')
          return { Component: NotFound }
        },
        handle: {
          title: 'menu.breadcrumb.error.children.notfound'
        }
      },
      {
        path: ErrorRouterLink.FORBIDDEN,
        async lazy() {
          const { Forbidden } = await import('@pages/error/error.module')
          return { Component: Forbidden }
        },
        handle: {
          title: 'menu.breadcrumb.error.children.forbidden'
        }
      },
      {
        path: ErrorRouterLink.INTERNAL_SERVER_ERROR,
        async lazy() {
          const { InternalServerError } = await import('@pages/error/error.module')
          return { Component: InternalServerError }
        },
        handle: {
          title: 'menu.breadcrumb.error.children.serverError'
        }
      }
    ]
  }
]

export { errorRouterModule }
