import { Col, Row } from 'antd'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

/**
 * Dashboard module
 * @constructor
 */
const DashboardModule: FC = () => {
  return (
    <Row className="dashboard-module">
      <Col span={24}>
        <Outlet />
      </Col>
    </Row>
  )
}

export default DashboardModule
