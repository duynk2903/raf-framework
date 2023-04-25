import { FC } from 'react'
import { Layout } from 'antd'
import { useSideBar } from '@theme/components/sidebar/sidebar.hook'
const { Sider } = Layout
import './sidebar.style.scss'
import { SidebarProps } from '@theme/components/sidebar/sidebar.type'
import { themeVariables } from '@core/configs/theme.config'
import MenuComponent from '@theme/components/menu/menu.component'

/**
 * Common sidebar component
 * @constructor
 */
const SidebarComponent: FC<SidebarProps> = () => {
  const { handleAutoBreakPointResponsive, sidebarState, colorBgContainer } = useSideBar()
  return (
    <Sider
      className="ngx-sidebar"
      collapsible
      collapsed={sidebarState?.collapsed}
      breakpoint="lg"
      onBreakpoint={handleAutoBreakPointResponsive}
      width={themeVariables.sidebarWidth}
      collapsedWidth={themeVariables.sidebarWidthCollapsed}
      trigger={null}
      style={{
        overflow: 'auto',
        position: 'fixed',
        left: 0,
        bottom: 0,
        backgroundColor: colorBgContainer
      }}>
      <MenuComponent />
    </Sider>
  )
}

export default SidebarComponent
