import { FC } from 'react'
import { Col, Row } from 'antd'
import { Outlet } from 'react-router-dom'
import Forbidden from './403/forbidden.component'
import NotFound from './404/notfound.component'
import InternalServerError from './500/server-error.component'

/**
 * Error layout component
 * @constructor
 */
const ErrorLayout: FC = () => {
  return (
    <Row gutter={[16, 16]} className="error-layout">
      <Col span={24}>
        <Outlet />
      </Col>
    </Row>
  )
}

export { ErrorLayout, Forbidden, NotFound, InternalServerError }
