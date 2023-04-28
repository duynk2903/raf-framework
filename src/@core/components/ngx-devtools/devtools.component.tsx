import { FloatButton } from 'antd'
import React, { FC } from 'react'
import { CodeSandboxOutlined, CommentOutlined, FormOutlined, PicRightOutlined } from '@ant-design/icons'
import './devtools.style.scss'
import { useDevTools } from '@core/components/ngx-devtools/devtools.hook'
import NgxChatBox from '@core/components/ngx-devtools/chat-box/chatbox.component'

/**
 * Ngx common devtools
 * @constructor
 */
const NgxDevtools: FC = () => {
  const { isOpen, handleOpenDevTools, handleOpenChatBox, itemState } = useDevTools()
  return (
    <>
      <FloatButton.Group
        shape="circle"
        className="ngx-devtools-container"
        trigger="hover"
        icon={<CodeSandboxOutlined spin />}
        onOpenChange={handleOpenDevTools}
        open={isOpen}>
        {isOpen && (
          <>
            <FloatButton
              badge={{ count: 1 }}
              icon={<CommentOutlined />}
              tooltip="Chat bot"
              className="chat-bot-btn"
              onClick={() => handleOpenChatBox(true)}
            />
            <FloatButton icon={<PicRightOutlined />} tooltip="Skeleton builder" className="skeleton-builder-btn" />
            <FloatButton icon={<FormOutlined />} tooltip="Form builder" className="skeleton-builder-btn" />
          </>
        )}
      </FloatButton.Group>
      {itemState?.isOpenChatBox && (
        <NgxChatBox isOpen={itemState?.isOpenChatBox} handleClose={() => handleOpenChatBox(false)} />
      )}
    </>
  )
}

export default NgxDevtools
