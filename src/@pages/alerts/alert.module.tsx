import { FC } from 'react'
import { Col, Row } from 'antd'
import { Outlet } from 'react-router-dom'
import BasicAlertComponent from '@pages/alerts/basic/basic.component'
import AlertPopup from './popup/popup.component'

/**
 * Alert layout
 * @constructor
 */
const AlertLayout: FC = () => {
  return (
    <Row gutter={[16, 16]} className="alert-layout-container">
      <Col span={24}>
        <Outlet />
      </Col>
    </Row>
  )
}

export { AlertLayout, BasicAlertComponent, AlertPopup }
