import auth from './auth.json'
import common from './common.json'
import error from './error.json'
import menu from './menu.json'
import settings from './settings.json'
import { LocalesResourceModel } from '@core/models/locales.model'

const ko_KR: LocalesResourceModel = {
  auth,
  common,
  error,
  menu,
  settings
}
export { ko_KR }