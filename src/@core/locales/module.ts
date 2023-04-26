import { LocalesModel } from '@core/models/locales.model'
import { ko_KR } from '@core/locales/kr'
import en_US from '@core/locales/en'

/**
 * Resource translation on application
 * If you want to add new languages please put to LocalesModel
 */
const resources: LocalesModel | any = {
  en: en_US,
  kr: ko_KR
}

export default resources
