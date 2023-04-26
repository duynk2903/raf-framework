import { IndexRouteObject, LazyRouteFunction, NonIndexRouteObject, RouteObject } from 'react-router-dom'

export type RouterModel = {
  lazy?: LazyRouteFunction<IndexRouteObject> | LazyRouteFunction<NonIndexRouteObject> | undefined | any
} & RouteObject
