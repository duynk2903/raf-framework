import { theme, ThemeConfig } from 'antd'
import { ThemeColorStyle, ThemeStyle } from '@core/enums/theme.enum'
import { ThemeColorSettingModel, ThemeSettingModel } from '@core/models/theme-setting.model'
import { TFunction } from 'i18next'

const { darkAlgorithm, defaultAlgorithm } = theme

/**
 * The default theme configuration
 * @param {ThemeSettingModel} themeSetting
 */
const themeConfig = ({ mode, themeColor }: ThemeSettingModel): ThemeConfig => ({
  algorithm: [mode == ThemeStyle.DARK ? darkAlgorithm : defaultAlgorithm],
  token: {
    colorPrimary: themeColor ?? ThemeColorStyle.DAYBREAK_BLUE
  }
})

/**
 * Theme variable config
 */
const themeVariables = {
  sidebarWidth: 240,
  sidebarWidthCollapsed: 60,
  headerHeight: 65.6
}
const themeColors = (translate: TFunction): ThemeColorSettingModel[] => [
  {
    label: translate('settings.color.daybreakBlue'),
    color: ThemeColorStyle.DAYBREAK_BLUE
  },
  {
    label: translate('settings.color.dustRed'),
    color: ThemeColorStyle.DUST_RED
  },
  {
    label: translate('settings.color.volcano'),
    color: ThemeColorStyle.VOLCANO
  },
  {
    label: translate('settings.color.sunsetOrange'),
    color: ThemeColorStyle.SUNSET_ORANGE
  },
  {
    label: translate('settings.color.cyan'),
    color: ThemeColorStyle.CYAN
  },
  {
    label: translate('settings.color.polarGreen'),
    color: ThemeColorStyle.POLAR_GREEN
  },
  {
    label: translate('settings.color.greekBlue'),
    color: ThemeColorStyle.GREEK_BLUE
  },
  {
    label: translate('settings.color.goldenPurple'),
    color: ThemeColorStyle.GOLDEN_PURPLE
  }
]

export { themeConfig, themeVariables, themeColors }
