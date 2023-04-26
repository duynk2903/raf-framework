import { useAlert } from '@core/components/ngx-alert/alert.hook'
import { useCallback } from 'react'

/**
 * use alert hook
 */
const useAlertPopup = () => {
  const { success, fail, warn, confirm, info } = useAlert()

  const showSuccessAlert = useCallback(() => {
    success({
      title: 'Success',
      text: 'Update successfully'
    })
  }, [])

  const showFailAlert = useCallback(() => {
    fail({
      title: 'Error',
      text: 'Update error!'
    })
  }, [])

  const showWarningAlert = useCallback(() => {
    warn({
      title: 'Warning',
      text: 'You are not allowed to update'
    })
  }, [])

  const showConfirmAlert = useCallback(() => {
    confirm({
      title: 'Confirm',
      text: 'Are you sure you want to update?'
    })
  }, [])

  const showInfoAlert = useCallback(() => {
    info({
      title: 'Info',
      text: 'Your information is available'
    })
  }, [])

  return {
    showSuccessAlert,
    showFailAlert,
    showWarningAlert,
    showConfirmAlert,
    showInfoAlert
  }
}

export { useAlertPopup }
