import React, { FC } from 'react'
import { Button, Checkbox, Col, Divider, Form, Input, Row, Typography } from 'antd'
import NgxIcon from '@core/components/ngx-icon/icon.component'
import './login.style.scss'
import { UnlockOutlined, UsergroupAddOutlined, UserOutlined } from '@ant-design/icons'
import { useLogin } from './login.hook'
import { String } from '@core/enums/common.enum'

/**
 * Login template component
 * @constructor
 */
const Login: FC = () => {
  const { form, loginValidationSchema, onSubmitLogin, translate, isLoadingSubmit, contextHolder } = useLogin()
  return (
    <Row className="login-container">
      <Col span={24} className="logo">
        <Typography.Title className="mr-1">--R</Typography.Title>
        <NgxIcon name="/images/logo.svg" />
        <Typography.Title className="ml-1">F--</Typography.Title>
      </Col>
      <Col span={24} className="login-form">
        {contextHolder}
        <Form
          initialValues={{ remember: false }}
          name="basic"
          size="middle"
          form={form}
          onFinish={onSubmitLogin}
          layout="vertical"
          autoComplete="off">
          <Form.Item label={translate('auth.login.companyCode')} name="companyCode" rules={[loginValidationSchema]}>
            <Input
              size="large"
              placeholder={translate('auth.login.companyCodePlaceholder') || String.EMPTY_STRING}
              autoComplete="off"
              prefix={<UsergroupAddOutlined />}
            />
          </Form.Item>

          <Form.Item label={translate('auth.login.username')} name="username" rules={[loginValidationSchema]}>
            <Input
              size="large"
              placeholder={translate('auth.login.usernamePlaceholder') || String.EMPTY_STRING}
              autoComplete="off"
              prefix={<UserOutlined />}
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ span: 24 }}>
            <Checkbox>{translate('auth.login.rememberMe')}</Checkbox>
          </Form.Item>

          <Form.Item label={translate('auth.login.password')} name="password" rules={[loginValidationSchema]}>
            <Input.Password
              placeholder={translate('auth.login.passwordPlaceholder') || String.EMPTY_STRING}
              type="password"
              prefix={<UnlockOutlined />}
              size="large"
              autoComplete="new-password"
            />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button className="w-full mt-2" type="primary" htmlType="submit" size="large" loading={isLoadingSubmit}>
              {translate('auth.login.btnLogin')}
            </Button>
          </Form.Item>
        </Form>
        <Divider />
        <Typography>{translate('auth.login.description')}</Typography>
        <Typography>{translate('auth.login.companyInformation')}</Typography>
      </Col>
    </Row>
  )
}

export default Login
