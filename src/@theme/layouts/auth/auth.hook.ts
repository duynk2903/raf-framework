import { theme } from 'antd'
import { useTranslation } from 'react-i18next'
import { TranslateEnum } from '@core/enums/translate.enum'

/**
 * Use auth layout hook
 */
const useAuthLayout = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  const { t: translate } = useTranslation([TranslateEnum.AUTH])

  return {
    colorBgContainer,
    translate
  }
}

export { useAuthLayout }
