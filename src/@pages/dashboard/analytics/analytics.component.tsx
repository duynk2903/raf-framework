import { FC } from 'react'
import { Col, Row, Typography } from 'antd'

/**
 * Dashboard Component
 * @constructor
 */
const DashboardAnalytic: FC = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Typography>Dashboard analytic</Typography>
      </Col>
    </Row>
  )
}

export default DashboardAnalytic
