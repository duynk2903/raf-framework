import { sidebarConfigs } from '@core/configs/sidebar.config'
import { MenuProps, theme } from 'antd'
import { useCallback, useEffect, useMemo } from 'react'
import { useRecoilState } from 'recoil'
import { sidebarSelector } from '@core/components/ngx-app/app.recoil'
import { useTranslation } from 'react-i18next'
import { TranslateEnum } from '@core/enums/translate.enum'
import { useLocation, useNavigate } from 'react-router-dom'
import _ from 'lodash'
import { flatMenus } from '@core/helpers/menu.helper'
import { MenuModel } from '@core/models/menu.model'

/**
 * Use sidebar hooks
 */
const useSideBar = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  const [sidebarState, setSidebarState] = useRecoilState(sidebarSelector)
  const { t: translate } = useTranslation([TranslateEnum.MENU])
  const listMenuSidebar = useMemo(() => sidebarConfigs(translate), [translate])
  const navigate = useNavigate()
  const { pathname } = useLocation()

  /**
   * Handle break point screen width change and set auto collapse sidebar
   */
  const handleAutoBreakPointResponsive = useCallback(
    (isBreak: boolean) => {
      setSidebarState({
        ...sidebarState,
        collapsed: isBreak
      })
    },
    [sidebarState]
  )

  /**
   * Handle click menu and start navigation
   */
  const handleSelectedMenuAndStartNavigate = useCallback(
    ({ keyPath: segments }: { keyPath: string[] }) => {
      const routerPath = `/${segments.reverse().join('/')}`
      navigate(routerPath)
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
    const listMenuFlats = flatMenus(listMenuSidebar)
    if (listMenuFlats.length > 0) {
      const routerActive: MenuModel | any = _.find(
        listMenuFlats,
        (item) => item && `/${item.parentId}/${item.key}` === pathname
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
          selectedKey: key,
          openKeys: cloneOpenKeys
        })
      }
    }
  }, [navigate, pathname])

  return {
    listMenuSidebar,
    colorBgContainer,
    handleAutoBreakPointResponsive,
    sidebarState,
    handleSelectedMenuAndStartNavigate,
    onOpenChange
  }
}

export { useSideBar }
