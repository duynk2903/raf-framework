import { RouterModel } from '@core/components/ngx-navigator/navigator.type'
import { FormRouterLink } from '@core/enums/router.enum'

/**
 * Form router module configuration
 */
const formRouterModule: RouterModel[] = [
  {
    path: FormRouterLink.BASE_PATH,
    async lazy() {
      const { FormLayout } = await import('@pages/form/form.module')
      return { Component: FormLayout }
    },
    handle: {
      title: 'menu.breadcrumb.form.title'
    },
    children: [
      {
        path: FormRouterLink.BASIC,
        async lazy() {
          const { FormBasic } = await import('@pages/form/form.module')
          return { Component: FormBasic }
        },
        handle: {
          title: 'menu.breadcrumb.form.children.basic'
        }
      },
      {
        path: FormRouterLink.ADVANCED,
        async lazy() {
          const { AdvancedForm } = await import('@pages/form/form.module')
          return { Component: AdvancedForm }
        },
        handle: {
          title: 'menu.breadcrumb.form.children.advance'
        }
      }
    ]
  }
]

export { formRouterModule }
