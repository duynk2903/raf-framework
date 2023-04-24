import { FC } from 'react'
import { Col, Row, Typography } from 'antd'

/**
 * Dashboard Component
 * @constructor
 */
const Dashboard: FC = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Typography>Dashboard page</Typography>
      </Col>
    </Row>
  )
}

export default Dashboard
