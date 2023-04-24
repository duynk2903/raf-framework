import { FC, useCallback } from 'react'
import { Button, Result } from 'antd'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { TranslateEnum } from '@core/enums/translate.enum'

/**
 * Forbidden component
 * @constructor
 */
const Forbidden: FC = () => {
  const { t: translate } = useTranslation([TranslateEnum.ERROR])
  const navigate = useNavigate()
  const goBack = useCallback(() => navigate(-1), [navigate])
  return (
    <Result
      status="403"
      title={translate('error.forbidden.title')}
      subTitle={translate('error.forbidden.subTitle')}
      extra={
        <Button type="primary" onClick={goBack}>
          {translate('error.backBtn')}
        </Button>
      }
    />
  )
}

export default Forbidden
