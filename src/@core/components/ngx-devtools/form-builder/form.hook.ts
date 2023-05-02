import { useRef } from 'react'

/**
 * Use form builder hooks
 */
const useFormBuilder = () => {
  const iframeRef = useRef(null)

  return {
    iframeRef
  }
}

export { useFormBuilder }
