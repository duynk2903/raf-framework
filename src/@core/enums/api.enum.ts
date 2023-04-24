export enum ApiMethod {
  GET = 'get',
  PUT = 'put',
  POST = 'post',
  DELETE = 'delete'
}

export enum ApiErrorStatusCode {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
  NETWORK_ERROR = 'ERR_NETWORK'
}
