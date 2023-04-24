import { FC } from 'react'
import { Col, Row } from 'antd'
import { Outlet } from 'react-router-dom'

/**
 * Error layout component
 * @constructor
 */
const ErrorLayout: FC = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Outlet />
      </Col>
    </Row>
  )
}

export default ErrorLayout
