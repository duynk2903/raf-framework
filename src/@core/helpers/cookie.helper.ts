import { Cookies } from 'react-cookie'
import { Cookie, CookieGetOptions, CookieSetOptions } from 'universal-cookie/cjs/types'

const cookieHelper = new Cookies()

/**
 * Set data to cookies with name
 * @param name
 * @param value
 * @param options
 */
function setCookie(name: string, value: Cookie, options?: CookieSetOptions) {
  return cookieHelper.set(name, value, { ...options })
}

/**
 * Get cookie by name
 * @param name
 * @param options
 */
function getCookieByName(name: string, options?: CookieGetOptions) {
  return cookieHelper.get(name, { ...options })
}

/**
 * Remove cookie by name
 * @param name
 * @param options
 */
function removeCookieByName(name: string, options?: CookieSetOptions) {
  return cookieHelper.remove(name, { ...options })
}

export { setCookie, getCookieByName, removeCookieByName }

export default cookieHelper
