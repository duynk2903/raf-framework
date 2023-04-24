import { AxiosError } from 'axios'
import { ApiErrorStatusCode } from '@core/enums/api.enum'
import { logOut } from '@core/helpers/auth.helper'
import { AxiosSingleton } from '@core/configs/axios.config'

/**
 * Interceptor request to backend
 */
AxiosSingleton.getInstance().interceptors.request.use(
  (config: any) => {
    const accessToken = AxiosSingleton.getToken()
    const headers: any = {}
    if (accessToken) {
      headers.Authorization = AxiosSingleton.getToken()
    }
    return { ...config, headers }
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

/**
 * Interceptor response from backend
 */
AxiosSingleton.getInstance().interceptors.response.use(
  async (response) => response,
  async (error: AxiosError) => {
    if (error.response! && error.response?.status) {
      switch (error.response?.status) {
        case ApiErrorStatusCode.BAD_REQUEST:
          break
        case ApiErrorStatusCode.UNAUTHORIZED:
          logOut()
          break
        case ApiErrorStatusCode.NOT_FOUND:
          break
        case ApiErrorStatusCode.INTERNAL_SERVER_ERROR:
          break
        default:
          break
      }
    }
    return Promise.reject(error)
  }
)
