import { useLayoutEffect, useState } from 'react'
import { theme } from 'antd'

/**
 * Use loader hooks
 */
const useLoader = () => {
  const [isDisplay, setDisplay] = useState<boolean>(true)
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  /**
   * Initial Effect and set display preloading state is disabled within 1200
   */
  useLayoutEffect(() => {
    setTimeout(() => {
      setDisplay(false)
    }, 1000)
  }, [])

  return {
    isDisplay,
    setDisplay,
    colorBgContainer
  }
}

export { useLoader }
