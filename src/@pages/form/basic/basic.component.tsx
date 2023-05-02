import React, { FC, useState } from 'react'
import {
  Button,
  Card,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Radio,
  Row,
  Select,
  Switch,
  TimePicker
} from 'antd'
import { Cascader, TreeSelect } from '@formily/antd-v5'
import NgxAnimation from '@core/components/ngx-animation/animation.component'
import { SmileOutlined } from '@ant-design/icons'
type LayoutType = Parameters<typeof Form>[0]['layout']
type SizeType = Parameters<typeof Form>[0]['size']

/**
 * Form basic template component
 * @constructor
 */
const FormBasic: FC = () => {
  const [form] = Form.useForm()
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal')

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout)
  }

  const formItemLayout = formLayout === 'horizontal' ? { labelCol: { span: 4 }, wrapperCol: { span: 20 } } : null

  const buttonItemLayout = formLayout === 'horizontal' ? { wrapperCol: { span: 20, offset: 4 } } : null
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default')

  const onFormSizeChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size)
  }
  return (
    <NgxAnimation type="fade-left" delay={300}>
      <Row gutter={[16, 16]}>
        <Col span={12} className="mt-5">
          <Card title="Login template">
            <Form
              name="basic"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 22 }}
              initialValues={{ remember: true }}
              onFinish={undefined}
              onFinishFailed={undefined}
              autoComplete="off">
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 4, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col span={12} className="mt-5">
          <Card title="Form layout">
            <Form
              {...formItemLayout}
              layout={formLayout}
              form={form}
              initialValues={{ layout: formLayout }}
              onValuesChange={onFormLayoutChange}>
              <Form.Item label="Form Layout" name="layout">
                <Radio.Group value={formLayout}>
                  <Radio.Button value="horizontal">Horizontal</Radio.Button>
                  <Radio.Button value="vertical">Vertical</Radio.Button>
                  <Radio.Button value="inline">Inline</Radio.Button>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Field A">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="Field B">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item {...buttonItemLayout}>
                <Button type="primary">Submit</Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        <Col span={12}>
          <Card title="Form size">
            <Form
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 20 }}
              layout="horizontal"
              initialValues={{ size: componentSize }}
              onValuesChange={onFormSizeChange}
              size={componentSize as SizeType}>
              <Form.Item label="Form Size" name="size">
                <Radio.Group>
                  <Radio.Button value="small">Small</Radio.Button>
                  <Radio.Button value="default">Default</Radio.Button>
                  <Radio.Button value="large">Large</Radio.Button>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Input">
                <Input />
              </Form.Item>
              <Form.Item label="Select">
                <Select>
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="TreeSelect">
                <TreeSelect
                  treeData={[{ title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] }]}
                />
              </Form.Item>
              <Form.Item label="Cascader">
                <Cascader
                  options={[
                    {
                      value: 'zhejiang',
                      label: 'Zhejiang',
                      children: [{ value: 'hangzhou', label: 'Hangzhou' }]
                    }
                  ]}
                />
              </Form.Item>
              <Form.Item label="DatePicker">
                <DatePicker />
              </Form.Item>
              <Form.Item label="InputNumber">
                <InputNumber />
              </Form.Item>
              <Form.Item label="Switch" valuePropName="checked">
                <Switch />
              </Form.Item>
              <Form.Item label="Button">
                <Button>Button</Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Customize validation">
            <Form {...formItemLayout}>
              <Form.Item label="Fail" validateStatus="error" help="Should be combination of numbers & alphabets">
                <Input placeholder="unavailable choice" id="error" />
              </Form.Item>

              <Form.Item label="Warning" validateStatus="warning">
                <Input placeholder="Warning" id="warning" prefix={<SmileOutlined />} />
              </Form.Item>

              <Form.Item
                label="Validating"
                hasFeedback
                validateStatus="validating"
                help="The information is being validated...">
                <Input placeholder="I'm the content is being validated" id="validating" />
              </Form.Item>

              <Form.Item label="Success" hasFeedback validateStatus="success">
                <Input placeholder="I'm the content" id="success" />
              </Form.Item>

              <Form.Item label="Warning" hasFeedback validateStatus="warning">
                <Input placeholder="Warning" id="warning2" />
              </Form.Item>

              <Form.Item
                label="Fail"
                hasFeedback
                validateStatus="error"
                help="Should be combination of numbers & alphabets">
                <Input placeholder="unavailable choice" id="error2" />
              </Form.Item>

              <Form.Item label="Success" hasFeedback validateStatus="success">
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item label="Warning" hasFeedback validateStatus="warning">
                <TimePicker style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item label="Error" hasFeedback validateStatus="error">
                <DatePicker.RangePicker style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item label="Error" hasFeedback validateStatus="error">
                <Select placeholder="I'm Select" allowClear />
              </Form.Item>

              <Form.Item label="Validating" hasFeedback validateStatus="error" help="Something breaks the rule.">
                <Cascader placeholder="I'm Cascader" options={[{ value: 'xx', label: 'xx' }]} allowClear />
              </Form.Item>

              <Form.Item label="Warning" hasFeedback validateStatus="warning" help="Need to be checked">
                <TreeSelect placeholder="I'm TreeSelect" treeData={[{ value: 'xx', label: 'xx' }]} allowClear />
              </Form.Item>

              <Form.Item label="inline" style={{ marginBottom: 0 }}>
                <Form.Item
                  validateStatus="error"
                  help="Please select right date"
                  style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
                  <DatePicker />
                </Form.Item>
                <span style={{ display: 'inline-block', width: '24px', lineHeight: '32px', textAlign: 'center' }}>
                  -
                </span>
                <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
                  <DatePicker />
                </Form.Item>
              </Form.Item>

              <Form.Item label="Success" hasFeedback validateStatus="success">
                <InputNumber style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item label="Success" hasFeedback validateStatus="success">
                <Input allowClear placeholder="with allowClear" />
              </Form.Item>

              <Form.Item label="Warning" hasFeedback validateStatus="warning">
                <Input.Password placeholder="with input password" />
              </Form.Item>

              <Form.Item label="Error" hasFeedback validateStatus="error">
                <Input.Password allowClear placeholder="with input password and allowClear" />
              </Form.Item>

              <Form.Item label="Fail" validateStatus="error" hasFeedback>
                <Mentions />
              </Form.Item>

              <Form.Item label="Fail" validateStatus="error" hasFeedback help="Should have something">
                <Input.TextArea allowClear showCount />
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </NgxAnimation>
  )
}

export default FormBasic
