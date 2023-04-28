/**
 * Delay return promise use for fake backend
 * @param time
 */
const delay: any = (time: number) => (result: any) => new Promise((resolve) => setTimeout(() => resolve(result), time))

/**
 * Sleep for async/await
 * @param ms
 */
function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms))
}

export { delay, sleep }
