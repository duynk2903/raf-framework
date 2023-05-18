import NgxAnimation from '@core/components/ngx-animation/animation.component'
import { Card, Col, Row, Typography, Slider, Rate } from 'antd'
import React, { useMemo, FC } from 'react'
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/react'
import {
  Form,
  FormItem,
  DatePicker,
  Checkbox,
  Cascader,
  Editable,
  Input,
  NumberPicker,
  Switch,
  Password,
  PreviewText,
  Radio,
  Reset,
  Select,
  Space,
  Submit,
  TimePicker,
  Transfer,
  TreeSelect,
  Upload,
  FormGrid,
  FormLayout,
  FormTab,
  FormCollapse,
  ArrayTable,
  ArrayCards
} from '@formily/antd-v5'
import NgxIcon from '@core/components/ngx-icon/icon.component'
import './advanced.style.scss'

const Text: React.FC<{
  value?: string
  content?: string
  mode?: 'normal' | 'h1' | 'h2' | 'h3' | 'p'
}> = ({ value, mode, content, ...props }) => {
  const tagName = mode === 'normal' || !mode ? 'div' : mode
  return React.createElement(tagName, props, value || content)
}

const SchemaField = createSchemaField({
  components: {
    Space,
    FormGrid,
    FormLayout,
    FormTab,
    FormCollapse,
    ArrayTable,
    ArrayCards,
    FormItem,
    DatePicker,
    Checkbox,
    Cascader,
    Editable,
    Input,
    Text,
    NumberPicker,
    Switch,
    Password,
    PreviewText,
    Radio,
    Reset,
    Select,
    Submit,
    TimePicker,
    Transfer,
    TreeSelect,
    Upload,
    Slider,
    Rate
  }
})

/**
 * Advance form component using form builder
 * @constructor
 */
const AdvancedForm: FC = () => {
  const form = useMemo(() => createForm(), [])
  return (
    <NgxAnimation type="fade-left" delay={300}>
      <Row gutter={[16, 16]} className="mt-5">
        <Col span={12}>
          <Card title="Form builder">
            <Typography.Paragraph>This is template form generator from form builder devtools</Typography.Paragraph>
            <Form form={form} labelCol={4} wrapperCol={20}>
              <SchemaField>
                <SchemaField.String
                  title="Input"
                  x-decorator="FormItem"
                  x-component="Input"
                  x-validator={[]}
                  name="h1vpd6hby8s"
                />
                <SchemaField.String
                  title="TextArea"
                  x-decorator="FormItem"
                  x-component="Input.TextArea"
                  x-validator={[]}
                  name="0aur74a3kdp"
                />
                <SchemaField.Markup
                  title="Password"
                  x-decorator="FormItem"
                  x-component="Password"
                  x-validator={[]}
                  name="guuafexep6r"
                />
                <SchemaField.Number
                  title="NumberPicker"
                  x-decorator="FormItem"
                  x-component="NumberPicker"
                  x-validator={[]}
                  name="vn60rmkun8i"
                />
                <SchemaField.Markup
                  title="Transfer"
                  x-decorator="FormItem"
                  x-component="Transfer"
                  x-validator={[]}
                  name="khwae14ub7i"
                />
                <SchemaField.Markup
                  title="Checkbox Group"
                  x-decorator="FormItem"
                  x-component="Checkbox.Group"
                  enum={[
                    { label: '选项1', value: 1 },
                    { label: '选项2', value: 2 }
                  ]}
                  x-validator={[]}
                  name="46mdqpx8kw5"
                />
              </SchemaField>
            </Form>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Dev tools">
            <Row gutter={[16, 16]}>
              The advanced form using form builder for generate form layout. Please open devtools and try it.
              <NgxIcon name="/images/form-builder.png" className="explain-form-builder" />
            </Row>
          </Card>
        </Col>
      </Row>
    </NgxAnimation>
  )
}

export default AdvancedForm
