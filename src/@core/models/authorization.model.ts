import { AuthorizationEnum } from '@core/enums/authorization.enum'

export interface AuthorizationModel {
  accessToken?: string
  username?: string
  companyId?: number | string | any
  iat?: number
  exp?: number
  authority?: AuthorizationEnum | string
  isAdmin?: boolean
}
