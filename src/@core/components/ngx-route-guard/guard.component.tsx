import { FC } from 'react'
import { isAuthenticated } from '@core/helpers/auth.helper'
import { Navigate } from 'react-router-dom'

/**
 * Router guard use for check permission
 * @param children
 * @constructor
 */
const RouterGuard: FC<any> = ({ children }) => {
  const isAuth = isAuthenticated()
  if (!isAuth) {
    return <Navigate to={'/auth/login'} />
  }
  return children
}

export default RouterGuard
