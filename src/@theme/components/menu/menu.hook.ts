import { MenuProps } from 'antd'
import { useRecoilState } from 'recoil'
import { sidebarSelector } from '@core/components/ngx-app/app.recoil'
import { useTranslation } from 'react-i18next'
import { TranslateEnum } from '@core/enums/translate.enum'
import { useCallback, useEffect, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { flatMenus } from '@core/helpers/menu.helper'
import { MenuModel } from '@core/models/menu.model'
import _ from 'lodash'
import { menusConfig } from '@core/configs/menu.config'
import { routerConfigs } from '@core/configs/router.config'
import { RouterModel } from '@core/components/ngx-navigator/navigator.type'
import { ErrorRouterLink } from '@core/enums/router.enum'
import { String } from '@core/enums/common.enum'

/**
 * Common menu hook
 */
const useMenu = () => {
  const [sidebarState, setSidebarState] = useRecoilState(sidebarSelector)
  const { t: translate } = useTranslation([TranslateEnum.MENU])
  const listMenuSidebar = useMemo(() => menusConfig(translate), [translate])
  const navigate = useNavigate()
  const { pathname } = useLocation()

  function flatRouter(listRouter: RouterModel[]): RouterModel[] | any[] {
    return _.flatMap(listRouter, (router) => {
      if (router.children && router.children.length > 0) {
        return flatRouter(router?.children).map((el) => ({
          ...el,
          path: `${router.path === String.BASE_PATH ? String.EMPTY_STRING : router.path}${String.BASE_PATH}${el.path}`
        }))
      } else {
        return router
      }
    })
  }

  /**
   * Handle click menu and start navigation
   */
  const handleSelectedMenuAndStartNavigate = useCallback(
    ({ keyPath: segments }: { keyPath: string[] }) => {
      const routerPath = `${String.BASE_PATH}${segments.reverse().join(String.BASE_PATH)}`
      const listRouterFlat = flatRouter(routerConfigs())
      const matchRouter = listRouterFlat.find((el: RouterModel) => el.path === routerPath)
      if (matchRouter) {
        navigate(matchRouter?.path)
      } else {
        navigate(`/${ErrorRouterLink.BASE_PATH}/${ErrorRouterLink.NOT_FOUND}`)
      }
    },
    [navigate]
  )

  const onOpenChange: MenuProps['onOpenChange'] = (keys: string[]) => {
    setSidebarState({
      ...sidebarState,
      openKeys: keys
    })
  }

  /**
   * Effect check when navigation or change router. The sidebar need re check active routes
   */
  useEffect(() => {
    if (listMenuSidebar.length > 0) {
      const listMenuFlats = flatMenus(listMenuSidebar)
      const routerActive: MenuModel | any = _.find(
        listMenuFlats,
        (item: any) => (item && `/${item.parentId}/${item.key}` === pathname) || `/${item.key}` === pathname
      )
      if (routerActive) {
        const { parentId, key } = routerActive
        const { openKeys } = sidebarState
        const cloneOpenKeys = _.cloneDeep(openKeys)
        if (!cloneOpenKeys.includes(parentId)) {
          cloneOpenKeys?.push(parentId)
        }
        setSidebarState({
          ...sidebarState,
          selectedKey: [key],
          openKeys: cloneOpenKeys
        })
      }
    }
  }, [navigate, listMenuSidebar])

  return {
    listMenuSidebar,
    sidebarState,
    handleSelectedMenuAndStartNavigate,
    onOpenChange
  }
}

export { useMenu }
