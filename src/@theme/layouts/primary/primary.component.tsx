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
  const { colorBgContainer, sidebarState, isLoading } = usePrimaryLayout()
  const { isEnabled } = sidebarState
  const layoutPaddingLeft = !isEnabled
    ? 0
    : !sidebarState?.collapsed
    ? themeVariables.sidebarWidth
    : themeVariables.sidebarWidthCollapsed
  return (
    <Layout className="ngx-primary-layout">
      <NgxLoader isLoading={isLoading}>
        <>
          <HeaderComponent />
          {isEnabled && (
            <Layout hasSider>
              <SidebarComponent />
            </Layout>
          )}

          <Layout
            className="ngx-primary-body"
            style={{
              marginLeft: layoutPaddingLeft
            }}>
            <Card className="ngx-primary-card">
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
        </>
      </NgxLoader>
    </Layout>
  )
}

export default PrimaryLayout
