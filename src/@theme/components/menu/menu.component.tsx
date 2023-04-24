import { FC } from 'react'
import { Menu } from 'antd'
import { useMenu } from '@theme/components/menu/menu.hook'
import { MenuProps } from '@theme/components/menu/menu.type'

/**
 * Common menu component.
 * @param className
 * @param theme
 * @param mode
 * @constructor
 */
const MenuComponent: FC<MenuProps> = ({ className, theme = undefined, mode = 'inline' }) => {
  const { sidebarState, onOpenChange, handleSelectedMenuAndStartNavigate, listMenuSidebar } = useMenu()
  return (
    <Menu
      mode={mode}
      theme={theme}
      className={className}
      selectedKeys={[sidebarState?.selectedKey]}
      openKeys={sidebarState?.openKeys}
      style={{ height: '100%', borderRight: 0 }}
      onOpenChange={onOpenChange}
      items={listMenuSidebar}
      onSelect={handleSelectedMenuAndStartNavigate}
    />
  )
}

export default MenuComponent
