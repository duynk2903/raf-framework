import { useMatches } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TranslateEnum } from '@core/enums/translate.enum'
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb'
import { String } from '@core/enums/common.enum'

/**
 * Use breadcrumb hook
 */
const useBreadCrumb = () => {
  const matches = useMatches()
  const [activeItem, setActiveItem] = useState<any>()
  const [crumbs, setCrumb] = useState<any[]>()
  const { t: translate } = useTranslation([TranslateEnum.MENU])

  const getListCrumbItems = () => {
    const listCrumbItems: ItemType[] = [
      {
        title: translate('menu.dashboard')
      }
    ]
    if (crumbs && crumbs.length > 0) {
      crumbs.forEach((crumb: any) => {
        listCrumbItems.push({
          title: translate(crumb && crumb.handle && crumb.handle.title) || String.EMPTY_STRING
        })
      })
    }
    return listCrumbItems
  }

  useEffect(() => {
    if (matches.length > 0) {
      setCrumb(matches.filter((el: any) => el && el.handle))
    }
  }, [matches])

  useEffect(() => {
    if (crumbs && crumbs.length > 0) {
      setActiveItem(crumbs[crumbs.length - 1])
    }
  }, [crumbs])

  return {
    activeItem,
    translate,
    getListCrumbItems
  }
}

export { useBreadCrumb }
