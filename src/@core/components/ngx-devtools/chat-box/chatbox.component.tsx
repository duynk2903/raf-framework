import React, { FC } from 'react'
import { Avatar, Button, Card, Col, Form, Input, List, Row, Space } from 'antd'
import './chatbox.style.scss'
import { CloseOutlined, DislikeFilled, LikeOutlined, SendOutlined } from '@ant-design/icons'
import { useChatBox } from '@core/components/ngx-devtools/chat-box/chatbox.hook'
import { ChatBoxProps } from '@core/components/ngx-devtools/chat-box/chatbox.type'
import NgxAnimation from '@core/components/ngx-animation/animation.component'

const data = Array.from({ length: 2 }).map((_, i) => ({
  href: 'https://ant.design',
  title: `ant design part ${i}`,
  description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure)'
}))

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
)

/**
 * Ngx chat box component
 * @param isOpen
 * @param handleClose
 * @constructor
 */
const NgxChatBox: FC<ChatBoxProps> = ({ isOpen = false, handleClose }) => {
  const { form, handleSubmitChatBox } = useChatBox()
  return (
    <>
      {isOpen && (
        <Row className="ngx-chat-box">
          <NgxAnimation type="fade-up" delay={300} className="h-full">
            <Col span={24}>
              <Card
                title="Open AI Tools"
                className="chat-box-container"
                extra={<CloseOutlined onClick={handleClose} />}>
                <Row>
                  <Col span={24} className="chat-response-container">
                    <List
                      itemLayout="vertical"
                      size="large"
                      dataSource={data}
                      renderItem={(item) => (
                        <List.Item
                          actions={[
                            <IconText icon={LikeOutlined} text="1" key="list-vertical-star-o" />,
                            <IconText icon={DislikeFilled} text="0" key="list-vertical-like-o" />
                          ]}>
                          <List.Item.Meta
                            avatar={
                              <Avatar
                                className="username"
                                icon={
                                  <img
                                    src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
                                    alt="Setting"
                                  />
                                }
                              />
                            }
                            title={<a href={item.href}>{item.title}</a>}
                          />
                          {item.content}
                        </List.Item>
                      )}
                    />
                  </Col>
                  <Col span={24} className="message-container">
                    <Form
                      initialValues={{ question: '' }}
                      name="basic"
                      size="middle"
                      form={form}
                      onFinish={handleSubmitChatBox}
                      layout="vertical"
                      className="chat-box-form"
                      autoComplete="off">
                      <Form.Item required>
                        <Input.TextArea
                          placeholder="Write a question"
                          name="question"
                          autoSize={{ minRows: 3, maxRows: 5 }}
                          allowClear
                        />
                        <Button
                          htmlType="submit"
                          type="text"
                          className="send-btn"
                          icon={<SendOutlined type="submit" />}
                        />
                      </Form.Item>
                    </Form>
                  </Col>
                </Row>
              </Card>
            </Col>
          </NgxAnimation>
        </Row>
      )}
    </>
  )
}

export default NgxChatBox
