import { useLayoutEffect, useState } from 'react'

/**
 * Use loader hooks
 */
const useLoader = () => {
  const [isDisplay, setDisplay] = useState<boolean>(true)

  /**
   * Initial Effect and set display preloading state is disabled within 1200
   */
  useLayoutEffect(() => {
    setTimeout(() => {
      setDisplay(false)
    }, 1200)
  }, [])

  return {
    isDisplay,
    setDisplay
  }
}

export { useLoader }
