import { FC, useCallback } from 'react'
import { Button, Result } from 'antd'
import { useTranslation } from 'react-i18next'
import { TranslateEnum } from '@core/enums/translate.enum'
import { useNavigate } from 'react-router-dom'

/**
 * InternalServerError component
 * @constructor
 */
const InternalServerError: FC = () => {
  const { t: translate } = useTranslation([TranslateEnum.ERROR])
  const navigate = useNavigate()
  const goBack = useCallback(() => navigate(-1), [navigate])
  return (
    <Result
      status="500"
      title={translate('error.serverError.title')}
      subTitle={translate('error.serverError.subTitle')}
      extra={
        <Button type="primary" onClick={goBack}>
          {translate('error.backBtn')}
        </Button>
      }
    />
  )
}

export default InternalServerError
