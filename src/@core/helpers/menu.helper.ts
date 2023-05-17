import { MenuModel } from '@core/models/menu.model'
import _ from 'lodash'

/**
 * Flat list menu item and add parent key to element flat
 * @param menuItems
 */
function flatMenus(menuItems: MenuModel[]) {
  return _.flatMap(menuItems, (item) => {
    if (item && item.children && item.children.length > 0) {
      return item.children.map((el) => ({
        ...item,
        ...el,
        children: [],
        parentId: item.key ?? ''
      }))
    } else {
      return {
        ...item
      }
    }
  })
}

export { flatMenus }
