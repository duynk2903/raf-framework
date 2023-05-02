import { FC } from 'react'
import { NgxFormilyProps } from '@core/components/ngx-devtools/form-builder/form.type'
import { Col, Drawer, Row } from 'antd'
import NgxAnimation from '@core/components/ngx-animation/animation.component'
import './form.style.scss'
import { useFormBuilder } from '@core/components/ngx-devtools/form-builder/form.hook'

/**
 * Ngx formily builder component
 * @param isOpen
 * @param onClose
 * @constructor
 */
const NgxFormBuilder: FC<NgxFormilyProps> = ({ isOpen = false, onClose }) => {
  const { iframeRef } = useFormBuilder()
  return (
    <Drawer
      title="Form Builder"
      placement="bottom"
      size="large"
      closable={false}
      onClose={onClose}
      open={isOpen}
      className="ngx-form-builder p-0"
      key="form-builder-drawer">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <NgxAnimation type="fade-down" delay={300}>
            <iframe
              ref={iframeRef}
              src={'https://designable-antd.formilyjs.org'}
              className="w-full"
              style={{ height: '100vh', marginTop: '-3.22rem' }}
            />
          </NgxAnimation>
        </Col>
      </Row>
    </Drawer>
  )
}

export default NgxFormBuilder
