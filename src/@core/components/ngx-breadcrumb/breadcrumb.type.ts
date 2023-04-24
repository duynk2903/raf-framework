import { Params } from '@remix-run/router'

export interface BreadcrumbModel {
  id: string
  pathname: string
  params: Params<string>
  data: unknown
  handle?: BreadcrumbHandle | any
}

export interface BreadcrumbHandle {
  title?: string
}
