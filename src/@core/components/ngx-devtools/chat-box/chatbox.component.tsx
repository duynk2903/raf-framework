import React, { FC, memo, useEffect, useState } from 'react'
import { Button, Col, Form, Input, Row } from 'antd'
import './chatbox.style.scss'
import { CameraFilled, CloseOutlined, SendOutlined, SmileOutlined } from '@ant-design/icons'
import { useChatBox } from '@core/components/ngx-devtools/chat-box/chatbox.hook'
import { ChatBoxProps, ChatBoxUserType } from '@core/components/ngx-devtools/chat-box/chatbox.type'
import NgxAnimation from '@core/components/ngx-animation/animation.component'

/**
 * Text generation by time delay
 * @param message
 * @param delay
 * @param isAIGenerator
 * @constructor
 */
const TextGenerator: FC<any> = memo(({ message, delay, isAIGenerator }: any) => {
  const [text, setText] = useState('')

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < message.length) {
        setText((text) => text + message.charAt(i))
        i++
        const chatBox = document.getElementById('chat')
        if (chatBox) {
          chatBox.scrollTop = chatBox.scrollHeight
        }
      } else {
        clearInterval(interval)
      }
    }, delay)
    return () => {
      clearInterval(interval)
    }
  }, [message, delay])

  return <>{isAIGenerator ? <div className="message ai">{text}</div> : <div className="message user">{message}</div>}</>
})

/**
 * Ngx chat box component
 * @param isOpen
 * @param handleClose
 * @constructor
 */
const NgxChatBox: FC<ChatBoxProps> = ({ isOpen = false, handleClose }) => {
  const { form, handleSubmitChatBox, contextHolder, chatBoxData, isWaitingAnswer } = useChatBox()
  return (
    <>
      {isOpen && (
        <Row className="ngx-chat-box">
          <NgxAnimation type="fade-right" delay={300} className="h-full">
            {contextHolder}
            <Col span={24}>
              <div className="chat">
                <div className="contact bar">
                  <div className="pic ai-icon"></div>
                  <div className="name">NGX-AI</div>
                  <div className="seen">
                    Today at {new Date().getHours()}:{new Date().getMinutes()}
                  </div>
                  <Button type="text" className="close-btn" onClick={handleClose} icon={<CloseOutlined />} />
                </div>
                <div className="messages" id="chat">
                  <div className="time">
                    Today at {new Date().getHours()}:{new Date().getMinutes()}
                  </div>
                  <div className="message ai">May i help you! 👋</div>
                  {chatBoxData.map((el, index) => (
                    <TextGenerator
                      message={el.content}
                      delay={20}
                      isAIGenerator={el.userType !== ChatBoxUserType.USER}
                      key={index}
                    />
                  ))}
                  {isWaitingAnswer && (
                    <div className="message ai">
                      <div className="typing typing-1"></div>
                      <div className="typing typing-2"></div>
                      <div className="typing typing-3"></div>
                    </div>
                  )}
                </div>

                <Form
                  name="basic"
                  size="small"
                  form={form}
                  onFinish={handleSubmitChatBox}
                  layout="vertical"
                  autoComplete="off"
                  className="chat-box-form mt-2">
                  <div className="input">
                    <CameraFilled style={{ fontSize: '1.5rem', color: '#666' }} className="mr-1" />
                    <SmileOutlined style={{ fontSize: '1.5rem', color: '#666' }} className="ml-2 mr-3" />
                    <Form.Item name="question">
                      <Input autoFocus placeholder="Send a message!" className="mt-5" type="text" />
                    </Form.Item>
                    <Button
                      type="text"
                      htmlType="submit"
                      icon={<SendOutlined style={{ fontSize: '1.2rem', color: '#666' }} className="ml-3" />}
                    />
                  </div>
                </Form>
              </div>
            </Col>
          </NgxAnimation>
        </Row>
      )}
    </>
  )
}

export default NgxChatBox
