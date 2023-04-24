import { ThemeStyle } from '@core/enums/theme.enum'

export interface ThemeSettingModel {
  mode: ThemeStyle
  themeColor?: string
}

export interface ThemeColorSettingModel {
  label: string
  color: string
}
