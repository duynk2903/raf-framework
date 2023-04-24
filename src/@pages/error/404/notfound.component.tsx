import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { TranslateEnum } from '@core/enums/translate.enum'
import { useNavigate } from 'react-router-dom'
import { Button, Result } from 'antd'

/**
 * Not found pages component.
 * @constructor
 */
const NotFound: FC = () => {
  const { t: translate } = useTranslation([TranslateEnum.ERROR])
  const navigate = useNavigate()
  const goBack = useCallback(() => navigate(-1), [navigate])
  return (
    <>
      <Result
        status="404"
        title={translate('error.notFound.title')}
        subTitle={`${translate('error.notFound.subtitle')} ${translate('error.notFound.subTitle2')}`}
        extra={
          <Button type="primary" onClick={goBack}>
            {translate('error.backBtn')}
          </Button>
        }
      />
    </>
  )
}

export default NotFound
