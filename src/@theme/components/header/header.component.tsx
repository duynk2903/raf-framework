import React, { FC } from 'react'
import { Button, Col, Layout, Menu, Row, Typography } from 'antd'
import { useHeader } from '@theme/components/header/header.hook'
const { Header } = Layout
import './header.style.scss'
import NgxIcon from '@core/components/ngx-icon/icon.component'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

/**
 * Common header application component
 * @constructor
 */
const HeaderComponent: FC = () => {
  const { listMenuConfigs, listHeaderMenuAction, sidebarState, handleCollapse } = useHeader()
  return (
    <Header className="ngx-header-container" style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
      <Row>
        {sidebarState?.isEnabled && (
          <Button
            type="text"
            className="collapse-btn"
            icon={sidebarState?.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={handleCollapse}
          />
        )}

        <Col span={2} className="header-logo">
          <Typography.Title className="mr-1" level={2}>
            --R
          </Typography.Title>
          <NgxIcon name="/images/logo.svg" className="logo" />
          <Typography.Title className="ml-1" level={2}>
            F--
          </Typography.Title>
        </Col>
        <Col span={16}>
          <Menu
            className="ngx-header-menu"
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['dashboard']}
            items={listMenuConfigs}
          />
        </Col>
        <Col span={6}>
          <Menu className="ngx-header-menu-action" theme="dark" mode="horizontal" items={listHeaderMenuAction} />
        </Col>
      </Row>
    </Header>
  )
}

export default HeaderComponent
