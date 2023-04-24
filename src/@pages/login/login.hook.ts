import { LoginInDto } from './login.type'
import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { TranslateEnum } from '@core/enums/translate.enum'
import { Form, notification } from 'antd'
import * as yup from 'yup'
import { yupSync } from '@core/helpers/validation.helper'
import { RegexType } from '@core/enums/regex.enum'
import { translateText } from '@core/helpers/i18n.helper'
import { useSubmitLogin } from './login.query'
import { setCookie } from '@core/helpers/cookie.helper'
import { CookieEnum } from '@core/enums/cookie.enum'
import { useNavigate } from 'react-router-dom'
import { AxiosSingleton } from '@core/configs/axios.config'
import { useSetRecoilState } from 'recoil'
import { authorizationSelector } from '@core/components/ngx-app/app.recoil'
import _ from 'lodash'
import { decodeJwtTokenAndConvertToAuthorizationModel } from '@core/helpers/auth.helper'
import { RouterLink } from '@core/enums/router.enum'

/**
 * Use login hook
 */
const useLogin = () => {
  // Component variables
  const { t: translate } = useTranslation([TranslateEnum.AUTH])
  const navigate = useNavigate()
  const [form] = Form.useForm<LoginInDto>()
  const [api, contextHolder] = notification.useNotification()
  const loginValidationSchema = useMemo(() => {
    const schema = yup.object().shape({
      companyCode: yup.string().required(translateText('auth.login.validation.companyCode', translate)),
      username: yup.string().required(translateText('auth.login.validation.username', translate)),
      password: yup
        .string()
        .required(translateText('auth.login.validation.password', translate))
        .matches(RegexType.PASSWORD, translateText('auth.login.validation.passwordRegex', translate))
    })
    return yupSync(schema)
  }, [translate])

  // React query
  const { mutate: mutateLogin, isLoading: isLoadingSubmit } = useSubmitLogin()
  const setAuthorization = useSetRecoilState(authorizationSelector)

  /**
   * Handle submit login form
   */
  const onSubmitLogin = useCallback(
    (data: LoginInDto) => {
      mutateLogin(data, {
        onSuccess: ({ accessToken }: any) => {
          if (!_.isEmpty(accessToken)) {
            setAuthorization(decodeJwtTokenAndConvertToAuthorizationModel(accessToken))
            setCookie(CookieEnum.REFRESH_TOKEN, accessToken, { path: '/' })
            AxiosSingleton.setToken(accessToken)
            navigate(RouterLink.HOME)
          }
        },
        onError: () => {
          api.error({
            message: translate('auth.login.error'),
            description: translate('auth.login.validation.usernameOrPasswordInvalid')
          })
        }
      })
    },
    [navigate]
  )

  return {
    onSubmitLogin,
    form,
    loginValidationSchema,
    translate,
    isLoadingSubmit,
    api,
    contextHolder
  }
}

export { useLogin }
