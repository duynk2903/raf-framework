import { applicationEnvironmentVariable } from '@core/configs/env.config'
import axios, { AxiosInstance, AxiosRequestConfig, CreateAxiosDefaults } from 'axios'
import { String } from '@core/enums/common.enum'

const envConfig = applicationEnvironmentVariable()

// Base axios api config
const axiosApiConfig: CreateAxiosDefaults = {
  withCredentials: true,
  timeout: 60000,
  baseURL: envConfig.backendUrl,
  headers: {
    common: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }
}

export class AxiosSingleton {
  private static instance: AxiosInstance
  public static token: string

  private constructor() {
    AxiosSingleton.instance = axios.create(axiosApiConfig)
    AxiosSingleton.token = String.EMPTY_STRING
  }

  /**
   * Get singleton instance of axios
   */
  public static getInstance(): AxiosInstance {
    if (!AxiosSingleton.instance) {
      const instance = new AxiosSingleton()
      if (instance) {
        return AxiosSingleton.instance
      }
    }
    return AxiosSingleton.instance
  }

  /**
   * Gets access token.
   *
   * @returns {string} token.
   * @memberof Api
   */
  public static getToken(): string {
    if (this.token && this.token.length > 0) {
      return `Bearer ${this.token}`
    }
    return String.EMPTY_STRING
  }

  /**
   * Sets Token.
   *
   * @param {string} token - token.
   * @memberof Api
   */
  public static setToken(token: string): void {
    this.token = token
  }

  /**
   * Get Uri
   *
   * @param {import("axios").AxiosRequestConfig} [config]
   * @returns {string}
   * @memberof Api
   */
  public getUri(config?: AxiosRequestConfig): string {
    return AxiosSingleton.instance.getUri(config)
  }
}
