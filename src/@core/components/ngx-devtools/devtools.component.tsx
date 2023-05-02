import { FloatButton } from 'antd'
import React, { FC } from 'react'
import { CodeSandboxOutlined, CommentOutlined, FormOutlined, PicRightOutlined } from '@ant-design/icons'
import './devtools.style.scss'
import { useDevTools } from '@core/components/ngx-devtools/devtools.hook'
import NgxChatBox from '@core/components/ngx-devtools/chat-box/chatbox.component'
import NgxFormBuilder from '@core/components/ngx-devtools/form-builder/form.component'

/**
 * Ngx common devtools
 * @constructor
 */
const NgxDevtools: FC = () => {
  const { isOpen, handleOpenDevTools, handleOpenChatBox, itemState, handleOpenFormBuilder } = useDevTools()
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
            <FloatButton
              icon={<FormOutlined />}
              tooltip="Form builder"
              className="skeleton-builder-btn"
              onClick={() => handleOpenFormBuilder(true)}
            />
          </>
        )}
      </FloatButton.Group>
      {itemState?.isOpenChatBox && (
        <NgxChatBox isOpen={itemState?.isOpenChatBox} handleClose={() => handleOpenChatBox(false)} />
      )}
      <NgxFormBuilder isOpen={itemState?.isOpenFormBuilder} onClose={() => handleOpenFormBuilder(false)} />
    </>
  )
}

export default NgxDevtools
