import React, { FC } from 'react'
import { Button, Col, Layout, Menu, Row, Typography } from 'antd'
import { useHeader } from '@theme/components/header/header.hook'
const { Header } = Layout
import './header.style.scss'
import NgxIcon from '@core/components/ngx-icon/icon.component'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import MenuComponent from '@theme/components/menu/menu.component'

/**
 * Common header application component
 * @constructor
 */
const HeaderComponent: FC = () => {
  const { listHeaderMenuAction, sidebarState, handleCollapse, navigateToHome } = useHeader()
  return (
    <Header
      className="ngx-header-container"
      style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', paddingLeft: !sidebarState?.isEnabled ? 0 : 50 }}>
      <Row>
        {sidebarState?.isEnabled && (
          <Button
            type="text"
            className="collapse-btn"
            icon={sidebarState?.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={handleCollapse}
          />
        )}

        <Col span={3} className="header-logo" onClick={navigateToHome}>
          <Typography.Title className="mr-1" level={2}>
            --R
          </Typography.Title>
          <NgxIcon name="/images/logo.svg" className="logo" />
          <Typography.Title className="ml-1" level={2}>
            F--
          </Typography.Title>
        </Col>
        {!sidebarState?.isEnabled && (
          <Col span={18}>
            <MenuComponent className="ngx-header-menu" theme="dark" mode="horizontal" isTopMenu />
          </Col>
        )}

        <Col span={!sidebarState?.isEnabled ? 3 : 21}>
          <Menu className="ngx-header-menu-action" theme="dark" mode="horizontal" items={listHeaderMenuAction} />
        </Col>
      </Row>
    </Header>
  )
}

export default HeaderComponent
