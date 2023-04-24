import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { TranslateEnum } from '@core/enums/translate.enum'
import { useNavigate } from 'react-router-dom'
import './not-found.style.scss'

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
      <div className="page-not-found">
        <div className="mars"></div>
        <img src="https://assets.codepen.io/1538474/404.svg" className="logo-404" alt="" />
        <img src="https://assets.codepen.io/1538474/meteor.svg" className="meteor" alt="" />
        <p className="title">{translate('error.notFound.title')}</p>
        <p className="subtitle">
          {translate('error.notFound.subtitle')} <br /> {translate('error.notFound.subTitle2')}
        </p>
        <div style={{ textAlign: 'center' }}>
          <span className="btn-back" onClick={goBack}>
            {translate('error.notFound.backBtn')}
          </span>
        </div>
        <img src="https://assets.codepen.io/1538474/astronaut.svg" className="astronaut" alt="" />
        <img src="https://assets.codepen.io/1538474/spaceship.svg" className="spaceship" alt="" />
      </div>
    </>
  )
}

export default NotFound
