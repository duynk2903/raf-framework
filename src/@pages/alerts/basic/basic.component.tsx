import React, { FC } from 'react'
import { Alert, Col, Divider, Row, Space } from 'antd'

/**
 * Alert success component
 * @constructor
 */
const BasicAlertComponent: FC = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Alert message="Success Text" type="success" />
          <Alert message="Info Text" type="info" />
          <Alert message="Warning Text" type="warning" />
          <Alert message="Error Text" type="error" />
        </Space>
      </Col>
      <Col span={12}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Alert message="Success Tips" type="success" showIcon />
          <Alert message="Informational Notes" type="info" showIcon />
          <Alert message="Warning" type="warning" showIcon closable />
          <Alert message="Error" type="error" showIcon />
        </Space>
      </Col>
      <Divider />
      <Col span={12}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Alert
            message="Success Text"
            description="Success Description Success Description Success Description"
            type="success"
          />
          <Alert
            message="Info Text"
            description="Info Description Info Description Info Description Info Description"
            type="info"
          />
          <Alert
            message="Warning Text"
            description="Warning Description Warning Description Warning Description Warning Description"
            type="warning"
          />
          <Alert
            message="Error Text"
            description="Error Description Error Description Error Description Error Description"
            type="error"
          />
        </Space>
      </Col>
      <Col span={12}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Alert
            message="Success Tips"
            description="Detailed description and advice about successful copywriting."
            type="success"
            showIcon
          />
          <Alert
            message="Informational Notes"
            description="Additional description and information about copywriting."
            type="info"
            showIcon
          />
          <Alert
            message="Warning"
            description="This is a warning notice about copywriting."
            type="warning"
            showIcon
            closable
          />
          <Alert message="Error" description="This is an error message about copywriting." type="error" showIcon />
        </Space>
      </Col>
    </Row>
  )
}

export default BasicAlertComponent
