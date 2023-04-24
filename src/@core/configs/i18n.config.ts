import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { TranslateLanguageEnum } from '@core/enums/translate.enum'
import ko_KR from 'antd/locale/ko_KR'
import en_US from 'antd/locale/en_US'

/**
 * List languages supported by i18next
 * If you want to use other languages, you need to add them to this list
 */
const listLanguage = {
  kr: TranslateLanguageEnum.KOREA,
  en: TranslateLanguageEnum.KOREA
}

/**
 * List localization of ant design languages
 * If you want to use other languages, you need to add them to this list
 */
const listLocales: any = {
  en: en_US,
  kr: ko_KR
}

/**
 * multiple language config with default is Korean language
 */
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: TranslateLanguageEnum.ENGLISH,
    lng: TranslateLanguageEnum.ENGLISH,
    debug: false,
    backend: {
      loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`
    },
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  })

export { listLanguage, listLocales }
export default i18n
