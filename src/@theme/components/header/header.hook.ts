import { headerMenuActions, menusConfig } from '@core/configs/menu.config'
import { useTranslation } from 'react-i18next'
import { TranslateEnum } from '@core/enums/translate.enum'
import { useCallback, useMemo } from 'react'
import { clearRefreshTokenAndCompanyIdInCookie, getAuthorizationCertificate } from '@core/helpers/auth.helper'
import { GENERIC_VALUE_TYPE } from '@core/enums/common.enum'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { applicationInitialState, authorizationSelector, sidebarSelector } from '@core/components/ngx-app/app.recoil'
import { useNavigate } from 'react-router-dom'
import { AuthRouterLink, RouterLink } from '@core/enums/router.enum'

/**
 * Use common header hook
 */
const useHeader = () => {
  const { t: translate } = useTranslation([TranslateEnum.MENU])
  const navigate = useNavigate()
  const setAuthorization = useSetRecoilState(authorizationSelector)
  const [sidebarState, setSidebarState] = useRecoilState(sidebarSelector)

  /**
   * Log out the current user and navigate to login page
   */
  const logOutUser = useCallback(() => {
    setAuthorization(applicationInitialState.authorization)
    clearRefreshTokenAndCompanyIdInCookie()
    navigate(`/${AuthRouterLink.BASE_PATH}/${AuthRouterLink.LOGIN}`)
  }, [navigate])

  /**
   * Handle click to logo and navigate to home page
   */
  const navigateToHome = useCallback(() => {
    navigate(RouterLink.HOME)
  }, [navigate])

  /**
   * List Header menu actions configuration with translate
   * @note: Fake username is tommy
   */
  const listHeaderMenuAction = useMemo(() => {
    const { username } = getAuthorizationCertificate()
    return headerMenuActions(translate, username ?? GENERIC_VALUE_TYPE, logOutUser)
  }, [translate])

  /**
   * List menu header config with translate
   */
  const listMenuConfigs = useMemo(() => {
    return menusConfig(translate)
  }, [translate])

  /**
   * Handle collapse the sidebar
   */
  const handleCollapse = useCallback(() => {
    setSidebarState({
      ...sidebarState,
      collapsed: !sidebarState.collapsed
    })
  }, [sidebarState])
  return {
    listMenuConfigs,
    headerMenuActions,
    listHeaderMenuAction,
    sidebarState,
    setSidebarState,
    handleCollapse,
    navigateToHome
  }
}

export { useHeader }
