import Swal from 'sweetalert2'
import { useCallback } from 'react'
import { NgxAlertIcon, NgxAlertOptions } from '@core/components/ngx-alert/alert.type'
import { useTranslation } from 'react-i18next'
import { TranslateEnum } from '@core/enums/translate.enum'
import { String } from '@core/enums/common.enum'

/**
 * Ngx alert hooks
 */
const useAlert = () => {
  const { t: translate } = useTranslation([TranslateEnum.COMMON])

  /**
   * Show the alert success message
   */
  const success: any = useCallback(
    async (options: NgxAlertOptions) => {
      return await Swal.fire({
        icon: NgxAlertIcon.SUCCESS,
        title: options?.title ?? (translate('common.alert.successTitle') || String.EMPTY_STRING),
        text: options.text,
        allowOutsideClick: false,
        confirmButtonText: translate('common.alert.btnConfirm') || String.EMPTY_STRING,
        showCancelButton: false,
        ...options
      }).then((result) => {
        if (result.value) {
          options && options.onOk && options?.onOk()
        }
      })
    },
    [Swal, translate]
  )

  /**
   * Fail the alert
   */
  const fail: any = useCallback(
    async (options: NgxAlertOptions) => {
      return await Swal.fire({
        icon: NgxAlertIcon.ERROR,
        title: options?.title ?? (translate('common.alert.failTitle') || String.EMPTY_STRING),
        text: options.text || String.EMPTY_STRING,
        allowOutsideClick: false,
        showCancelButton: false,
        confirmButtonText: translate('common.alert.btnConfirm') || String.EMPTY_STRING,
        ...options
      }).then((result) => {
        if (result.value) {
          options && options.onOk && options?.onOk()
        }
      })
    },
    [Swal, translate]
  )

  /**
   * Warning the alert with message
   */
  const warn: any = useCallback(
    async (options: NgxAlertOptions) => {
      return await Swal.fire({
        icon: NgxAlertIcon.WARNING,
        title: options?.title ?? (translate('common.alert.warningTitle') || String.EMPTY_STRING),
        text: options.text || String.EMPTY_STRING,
        allowOutsideClick: false,
        showCancelButton: false,
        confirmButtonText: translate('common.alert.btnConfirm') || String.EMPTY_STRING,
        ...options
      }).then((result) => {
        if (result.value) {
          options && options.onOk && options?.onOk()
        }
      })
    },
    [Swal, translate]
  )

  /**
   * Confirm message with display confirm and cancel button default
   */
  const confirm: any = useCallback(
    async (options: NgxAlertOptions) => {
      return await Swal.fire({
        icon: NgxAlertIcon.QUESTION,
        title: options?.title ?? (translate('common.alert.warningTitle') || String.EMPTY_STRING),
        text: options.text || String.EMPTY_STRING,
        allowOutsideClick: false,
        showCancelButton: true,
        cancelButtonText: translate('common.alert.btnCancel') || String.EMPTY_STRING,
        confirmButtonText: translate('common.alert.btnConfirm') || String.EMPTY_STRING,
        ...options
      }).then((result) => {
        if (result.value) {
          options && options.onOk && options?.onOk()
        } else {
          options && options.onCancel && options?.onCancel()
        }
      })
    },
    [Swal, translate]
  )

  /**
   * Show info message
   */
  const info: any = useCallback(
    async (options: NgxAlertOptions) => {
      return await Swal.fire({
        icon: NgxAlertIcon.INFO,
        title: options?.title ?? (translate('common.alert.successTitle') || String.EMPTY_STRING),
        text: options.text,
        allowOutsideClick: false,
        confirmButtonText: translate('common.alert.btnConfirm') || String.EMPTY_STRING,
        showCancelButton: false,
        ...options
      }).then((result) => {
        if (result.value) {
          options && options.onOk && options?.onOk()
        }
      })
    },
    [Swal, translate]
  )

  return {
    success,
    Swal,
    fail,
    warn,
    confirm,
    info
  }
}

export { useAlert }
