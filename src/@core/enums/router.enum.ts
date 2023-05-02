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
  BASE_PATH = 'errors',
  NOT_FOUND = 'notfound',
  FORBIDDEN = 'forbidden',
  INTERNAL_SERVER_ERROR = 'server-error',
  DEFAULT_PAGE = '/errors/notfound'
}

export enum AlertRouterLink {
  BASE_PATH = 'alert',
  BASIC = 'basic',
  POPUP = 'popup'
}

export enum FormRouterLink {
  BASE_PATH = 'form',
  BASIC = 'basic-template',
  ADVANCED = 'advanced-template'
}

export enum AuthRouterLink {
  BASE_PATH = 'auth',
  LOGIN = 'login'
}
