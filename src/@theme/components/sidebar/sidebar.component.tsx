import { FC } from 'react'
import { Layout, Menu } from 'antd'
import { useSideBar } from '@theme/components/sidebar/sidebar.hook'
const { Sider } = Layout
import './sidebar.style.scss'
import { SidebarProps } from '@theme/components/sidebar/sidebar.type'
import { themeVariables } from '@core/configs/theme.config'

/**
 * Common sidebar component
 * @constructor
 */
const SidebarComponent: FC<SidebarProps> = () => {
  const { listMenuSidebar, handleAutoBreakPointResponsive, sidebarState } = useSideBar()
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
        height: '100vh',
        position: 'fixed',
        left: 0,
        bottom: 0
      }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['dashboard']}
        defaultOpenKeys={['dashboard']}
        style={{ height: '100%', borderRight: 0 }}
        items={listMenuSidebar}
      />
    </Sider>
  )
}

export default SidebarComponent
