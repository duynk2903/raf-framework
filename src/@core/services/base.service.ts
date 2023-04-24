import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { applicationEnvironmentVariable } from '@core/configs/env.config'
import { AxiosSingleton } from '@core/configs/axios.config'

/**
 * Base service for the Axios instance
 */
class BaseService {
  axiosInstance: AxiosInstance

  constructor() {
    this.axiosInstance = AxiosSingleton.getInstance()
  }

  /**
   * Convert response to response.data
   * @param response
   */
  public responseBody<T>(response: AxiosResponse<T>) {
    return response.data
  }

  /**
   * Merge base backend url config with url request
   * @param url
   */
  public mergeUrl(url: string) {
    const envConfig = applicationEnvironmentVariable()
    return `${envConfig.backendUrl}${url}`
  }

  /**
   * HTTP GET method, used to fetch data `statusCode`: 200.
   *
   * @access public
   * @template T - `TYPE`: expected object.
   * @param {string} url - endpoint you want to reach.
   * @param params
   * @returns {Promise} HTTP `axios` response payload.
   * @memberof Api
   */
  public get<T>(url: string, params?: any) {
    return this.axiosInstance.get<T>(url, { params: { ...params } }).then(this.responseBody)
  }

  /**
   * Request get with config
   * @param url
   * @param config
   */
  public getWithOption<T>(url: string, config: AxiosRequestConfig) {
    return this.axiosInstance.get<T>(url, config)
  }

  /**
   * HTTP OPTIONS method.
   *
   * @access public
   * @template T - `TYPE`: expected object.
   * @template R - `RESPONSE`: expected object inside a axios response format.
   * @param {string} url - endpoint you want to reach.
   * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
   * @returns {Promise<any>} HTTP `axios` response payload.
   * @memberof Api
   */
  public options<T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.axiosInstance.options(url, config).then(this.responseBody)
  }

  /**
   * HTTP DELETE method, `statusCode`: 204 No Content.
   *
   * @access public
   * @template T - `TYPE`: expected object.
   * @template R - `RESPONSE`: expected object inside a axios response format.
   * @param {string} url - endpoint you want to reach.
   * @param body
   * @returns {Promise<>} - HTTP [axios] response payload.
   * @memberof Api
   */
  public delete<T, R = AxiosResponse<T>>(url: string, body: any): Promise<R> {
    return this.axiosInstance.delete(url, { data: body })
  }

  /**
   * HTTP HEAD method.
   *
   * @access public
   * @template T - `TYPE`: expected object.
   * @template R - `RESPONSE`: expected object inside a axios response format.
   * @param {string} url - endpoint you want to reach.
   * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
   * @returns {Promise<>} - HTTP [axios] response payload.
   * @memberof Api
   */
  public head<T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.axiosInstance.head(url, config).then(this.responseBody)
  }

  /**
   * HTTP POST method `statusCode`: 201 Created.
   *
   * @access public
   * @template T - `TYPE`: expected object.
   * @template B - `BODY`: body request object.
   * @template R - `RESPONSE`: expected object inside a axios response format.
   * @param {string} url - endpoint you want to reach.
   * @param data - payload to be sent as the `request body`,
   * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
   * @returns {Promise<any>} - HTTP [axios] response payload.
   * @memberof Api
   */
  public post<T, B, R = AxiosResponse<T>>(url: string, data?: B, config?: AxiosRequestConfig): Promise<R> {
    return this.axiosInstance.post(url, data, config).then(this.responseBody)
  }

  /**
   * HTTP PUT method.
   *
   * @access public
   * @template T - `TYPE`: expected object.
   * @template B - `BODY`: body request object.
   * @template R - `RESPONSE`: expected object inside a axios response format.
   * @param {string} url - endpoint you want to reach.
   * @param data - payload to be sent as the `request body`,
   * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
   * @returns {Promise<any>} - HTTP [axios] response payload.
   * @memberof Api
   */
  public put<T, B, R = AxiosResponse<T>>(url: string, data?: B, config?: AxiosRequestConfig): Promise<R> {
    return this.axiosInstance.put(url, data, config).then(this.responseBody)
  }

  /**
   * HTTP PATCH method.
   *
   * @access public
   * @template T - `TYPE`: expected object.
   * @template B - `BODY`: body request object.
   * @template R - `RESPONSE`: expected object inside a axios response format.
   * @param {string} url - endpoint you want to reach.
   * @param {any} data - payload to be send as the `request body`,
   * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
   * @returns {Promise<any>} - HTTP [axios] response payload.
   * @memberof Api
   */
  public patch<T, B, R = AxiosResponse<T>>(url: string, data?: B, config?: AxiosRequestConfig): Promise<R> {
    return this.axiosInstance.patch(url, data, config).then(this.responseBody)
  }
}

const request = Object.freeze(new BaseService())

export { request }
