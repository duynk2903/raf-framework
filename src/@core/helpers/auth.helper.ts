import { Builder } from '@core/helpers/builder.helper'
import jwt_decode from 'jwt-decode'
import { String } from '@core/enums/common.enum'
import { getCookieByName, removeCookieByName } from '@core/helpers/cookie.helper'
import { AuthorizationModel } from '@core/models/authorization.model'
import { AuthorizationEnum } from '@core/enums/authorization.enum'
import { CookieEnum } from '@core/enums/cookie.enum'

/**
 * Get authorization certificate from cookie provider
 * use @jwt-decode for decode jwt token and check expired
 * If token is expired return base Authorization
 */
const getAuthorizationCertificate = () => {
  let baseAuthorizationInitial = Builder<AuthorizationModel>().accessToken(String.EMPTY_STRING).build()
  const refreshToken = getCookieByName(CookieEnum.REFRESH_TOKEN)
  if (refreshToken && refreshToken.length > 0) {
    if (refreshToken && refreshToken.length > 0) {
      baseAuthorizationInitial = decodeJwtTokenAndConvertToAuthorizationModel(refreshToken)
    }
  }
  return baseAuthorizationInitial
}

/**
 * Check is authenticated
 */
const isAuthenticated = () => {
  const { accessToken }: AuthorizationModel = getAuthorizationCertificate()
  return accessToken && accessToken.length > 0
}

/**
 * Decode JWT token and convert it to Authorization model
 * @param jwtToken
 */
const decodeJwtTokenAndConvertToAuthorizationModel = (jwtToken: string) => {
  const decodeHeader: any = jwt_decode(jwtToken, { header: true })
  const decodeBody: any = jwt_decode(jwtToken)
  let authorizationModel: AuthorizationModel = {}
  if (decodeBody && decodeHeader) {
    const { sub = String.EMPTY_STRING, company = null, exp = 0, iat = 0 } = decodeBody
    const { authorities } = decodeHeader
    authorizationModel = {
      companyId: company ?? null,
      username: sub,
      accessToken: jwtToken,
      iat: iat,
      exp
    }
    if (authorities && authorities.length > 0) {
      authorizationModel.authority = authorities[0]?.authority || String.EMPTY_STRING
      authorizationModel.isAdmin = authorizationModel.authority === AuthorizationEnum.ADMIN
    }
  }
  return authorizationModel
}

/**
 * Clear token
 */
const clearRefreshToken = () => {
  removeCookieByName(CookieEnum.REFRESH_TOKEN)
}

/**
 * Function handle logout
 */
const logOut = () => {
  clearRefreshToken()
  window.location.href = '/auth/login'
}

export {
  getAuthorizationCertificate,
  isAuthenticated,
  clearRefreshToken,
  logOut,
  decodeJwtTokenAndConvertToAuthorizationModel
}
