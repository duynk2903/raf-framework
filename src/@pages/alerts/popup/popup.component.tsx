import { FC } from 'react'
import { Button, Col, Row, Space } from 'antd'
import { ThemeColorStyle } from '@core/enums/theme.enum'
import { useAlertPopup } from '@pages/alerts/popup/popup.hook'

/**
 * Alert popup
 * @constructor
 */
const AlertPopup: FC = () => {
  const { showSuccessAlert, showFailAlert, showWarningAlert, showConfirmAlert, showInfoAlert } = useAlertPopup()
  return (
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Button
            style={{ backgroundColor: ThemeColorStyle.DAYBREAK_BLUE }}
            className="w-28"
            onClick={showSuccessAlert}>
            Success
          </Button>
          <Button style={{ backgroundColor: ThemeColorStyle.DUST_RED }} className="w-28" onClick={showFailAlert}>
            Error
          </Button>
          <Button
            style={{ backgroundColor: ThemeColorStyle.SUNSET_ORANGE }}
            className="w-28"
            onClick={showWarningAlert}>
            Warning
          </Button>
          <Button style={{ backgroundColor: ThemeColorStyle.CYAN }} className="w-28" onClick={showInfoAlert}>
            Info
          </Button>
          <Button style={{ backgroundColor: ThemeColorStyle.VOLCANO }} className="w-28" onClick={showConfirmAlert}>
            Confirm
          </Button>
        </Space>
      </Col>
    </Row>
  )
}

export default AlertPopup
