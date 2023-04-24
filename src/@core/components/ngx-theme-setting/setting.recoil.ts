import { atom } from 'recoil'
import { ThemeSettingModel } from '@core/models/theme-setting.model'
import { recoilPersist } from 'recoil-persist'
import { Builder } from '@core/helpers/builder.helper'
import { ThemeColorStyle, ThemeStyle } from '@core/enums/theme.enum'
import { RecoilStateKey } from '@core/enums/recoil.enum'

/**
 * Theme settings initialization state
 */
const themeSettingsInitialState: ThemeSettingModel = Builder<ThemeSettingModel>()
  .mode(ThemeStyle.DARK)
  .themeColor(ThemeColorStyle.DAYBREAK_BLUE)
  .build()

const { persistAtom } = recoilPersist({
  key: RecoilStateKey.THEME_SETTING,
  storage: localStorage
})

/**
 * The theme settings global state and persist value to localstorage.
 */
const themeSettingsState = atom<ThemeSettingModel>({
  key: RecoilStateKey.THEME_SETTING,
  default: themeSettingsInitialState,
  effects_UNSTABLE: [persistAtom]
})

export { themeSettingsState, themeSettingsInitialState }
