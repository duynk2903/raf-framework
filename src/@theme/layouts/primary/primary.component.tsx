import React, { FC } from 'react'
import { Card, Col, Layout, Row } from 'antd'
import HeaderComponent from '@theme/components/header/header.component'
import SidebarComponent from '@theme/components/sidebar/sidebar.component'
import { Outlet } from 'react-router-dom'
import { themeVariables } from '@core/configs/theme.config'
import { usePrimaryLayout } from '@theme/layouts/primary/primary.hook'
const { Content } = Layout
import './primary.style.scss'
import NgxBreadCrumb from '@core/components/ngx-breadcrumb/breadcrumb.component'
import NgxLoader from '@core/components/ngx-loader/loader.component'

/**
 * Primary Layout component
 * @constructor
 */
const PrimaryLayout: FC = () => {
  const { colorBgContainer, isLoading, isEnabled, collapsed } = usePrimaryLayout()
  const sideBarWidth = !collapsed ? themeVariables.sidebarWidth : themeVariables.sidebarWidthCollapsed
  const layoutPaddingLeft = !isEnabled ? 0 : sideBarWidth
  return (
    <Layout className="ngx-primary-layout">
      <NgxLoader isLoading={isLoading}>
        <>
          <HeaderComponent />
          <Layout
            hasSider
            className="ngx-primary-body"
            style={{
              marginLeft: layoutPaddingLeft
            }}>
            {isEnabled && <SidebarComponent />}
            <Layout style={{ padding: '24px 24px 24px' }} className={!isEnabled ? 'wide' : ''}>
              <Card className="ngx-primary-card" bodyStyle={{ minHeight: 'calc(100vh - 7rem)' }}>
                <Row>
                  <Col span={24} style={{ background: colorBgContainer }}>
                    <NgxBreadCrumb />
                  </Col>

                  <Col span={24}>
                    <Content
                      className="ngx-primary-outlet"
                      style={{
                        background: colorBgContainer
                      }}>
                      <Outlet />
                    </Content>
                  </Col>
                </Row>
              </Card>
            </Layout>
          </Layout>
        </>
      </NgxLoader>
    </Layout>
  )
}

export default PrimaryLayout
