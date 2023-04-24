export enum RouterLink {
  BASE_PATH = '',
  HOME = '/'
}

export enum DashboardRouterLink {
  BASE_PATH = 'dashboard',
  ANALYTIC = 'analytics'
}

export enum ErrorRouterLink {
  MATCH_PATH = '*',
  DEFAULT = '',
  BASE_PATH = 'errors',
  NOT_FOUND = '404',
  FORBIDDEN = '403',
  INTERNAL_SERVER_ERROR = '500'
}

export enum AuthRouterLink {
  BASE_PATH = 'auth',
  LOGIN = 'login'
}
