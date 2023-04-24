import i18next from '@core/configs/i18n.config'
import { TranslateEnum, TranslateLanguageEnum } from '@core/enums/translate.enum'
import { TFunction } from 'i18next'
import { String } from '@core/enums/common.enum'

/**
 * Translate text by key and name space
 * @param key
 * @param nameSpace
 */
const translateByNameSpace = (key: string, nameSpace: string | TranslateEnum) => {
  return i18next.t(key, { ns: nameSpace })
}

/**
 * Translate text by key and use default instance
 * @param key
 * @param translateInstance
 */
const translateText = (key: string, translateInstance: TFunction) => {
  return translateInstance(key) ?? String.EMPTY_STRING
}

/**
 * Change language
 * @param language
 */
const changeLanguage = async (language: TranslateLanguageEnum) => {
  await i18next.changeLanguage(language)
}

const getCurrentLanguage = () => i18next.language

export { translateByNameSpace, changeLanguage, getCurrentLanguage, translateText }
