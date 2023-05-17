import auth from './auth.json'
import common from './common.json'
import error from './error.json'
import menu from './menu.json'
import settings from './settings.json'
import dashboard from './dashboard.json'
import { LocalesResourceModel } from '@core/models/locales.model'

const en_US: LocalesResourceModel = {
  auth,
  common,
  error,
  menu,
  settings,
  dashboard
}
export default en_US
