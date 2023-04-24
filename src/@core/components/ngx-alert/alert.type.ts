import { SweetAlertOptions } from 'sweetalert2'

export enum NgxAlertIcon {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
  QUESTION = 'question'
}

export interface NgxAlertOptions extends SweetAlertOptions {
  onOk?: () => void
  onCancel?: () => void
}
