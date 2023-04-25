import { FC } from 'react'
import { Button, Col, Layout, Row, Typography } from 'antd'
import './auth.style.scss'
import { useAuthLayout } from '@theme/layouts/auth/auth.hook'
import { Outlet } from 'react-router-dom'
import NgxIcon from '@core/components/ngx-icon/icon.component'
import { CodeSandboxOutlined } from '@ant-design/icons'

/**
 * Auth layout component
 * @constructor
 */
const AuthLayout: FC = () => {
  const { colorBgContainer, translate } = useAuthLayout()
  return (
    <Layout className="ngx-auth-layout">
      <Layout.Content>
        <Row className="ngx-auth-container h-full m-auto" justify="center" align={'middle'}>
          <div data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000" className="w-full">
            <Col span={12} offset={6}>
              <Row className="auth-body" gutter={[16, 32]}>
                <Col span={13} className="auth-left-container pt-12">
                  <Row>
                    <Col span={24}>
                      <NgxIcon name="/images/auth-logo.png" className="logo" />
                      <Typography.Title level={1} className="title-iot pt-10 font-bold mb-0">
                        {translate('auth.layout.titleIot')}
                      </Typography.Title>
                      <Typography.Title className="description-iot mt-1 font-bold" level={3}>
                        {translate('auth.layout.description')}
                      </Typography.Title>
                    </Col>

                    <Col span={24}>
                      <Button
                        type="primary"
                        shape="round"
                        className="about-button mt-10"
                        icon={<CodeSandboxOutlined />}
                        size="large">
                        {translate('auth.layout.btnAbout')}
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col span={11} className="auth-right-container" style={{ background: colorBgContainer }}>
                  <Outlet />
                </Col>

                <Col span={24} className="ngx-auth-footer pt-8">
                  <Typography className="address">{translate('auth.layout.address')}</Typography>
                  <Typography className="hotline">{translate('auth.layout.hotline')}</Typography>
                  <Typography className="hotline">
                    {translate('auth.layout.copyright')}
                    <strong>{translate('auth.layout.companyName')}</strong>
                    {translate('auth.layout.alright')}
                  </Typography>
                </Col>
              </Row>
            </Col>
          </div>
        </Row>
      </Layout.Content>
    </Layout>
  )
}

export default AuthLayout
