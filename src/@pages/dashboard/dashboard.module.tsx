import { Col, Row } from 'antd'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import DashboardAnalytic from './analytics/analytics.component'

/**
 * Dashboard module
 * @constructor
 */
const DashboardLayout: FC = () => {
  return (
    <Row className="dashboard-layout">
      <Col span={24}>
        <Outlet />
      </Col>
    </Row>
  )
}

export { DashboardLayout, DashboardAnalytic }
