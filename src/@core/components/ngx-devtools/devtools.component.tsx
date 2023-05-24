import { FloatButton } from 'antd'
import React, { FC } from 'react'
import { CodeSandboxOutlined, CommentOutlined, FormOutlined, PicRightOutlined } from '@ant-design/icons'
import './devtools.style.scss'
import { useDevTools } from '@core/components/ngx-devtools/devtools.hook'
import NgxChatBox from '@core/components/ngx-devtools/chat-box/chatbox.component'
import NgxFormBuilder from '@core/components/ngx-devtools/form-builder/form.component'
import { NgxDevToolsProps } from '@core/components/ngx-devtools/devtools.type'
import NgxDevToolsTournament from '@core/components/ngx-devtools/tour/tour.component'

/**
 * Ngx common devtools
 * @param isOpenDevTools
 * @constructor
 */
const NgxDevtools: FC<NgxDevToolsProps> = ({ isOpenDevTools = true }) => {
  const {
    isOpen,
    handleOpenDevTools,
    handleOpenChatBox,
    itemState,
    handleOpenFormBuilder,
    devToolsRef,
    formBuilderRef,
    openAIRef,
    skeletonBuilderRef,
    translate
  } = useDevTools()
  return (
    <>
      {isOpenDevTools && (
        <>
          <FloatButton.Group
            shape="circle"
            className="ngx-devtools-container"
            trigger="hover"
            icon={<CodeSandboxOutlined ref={devToolsRef} spin />}
            onOpenChange={handleOpenDevTools}
            open={isOpen}>
            {isOpen && (
              <>
                <FloatButton
                  ref={openAIRef}
                  badge={{ count: 1 }}
                  icon={<CommentOutlined />}
                  tooltip={translate('devTools.chatBotTooltip')}
                  className="chat-bot-btn"
                  onClick={() => handleOpenChatBox(true)}
                />
                <FloatButton
                  ref={skeletonBuilderRef}
                  icon={<PicRightOutlined />}
                  tooltip={translate('devTools.skeletonBuilderTooltip')}
                  className="skeleton-builder-btn"
                />
                <FloatButton
                  ref={formBuilderRef}
                  icon={<FormOutlined />}
                  tooltip={translate('devTools.formBuilderTooltip')}
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
          <NgxDevToolsTournament
            translate={translate}
            devToolsRef={devToolsRef}
            openAIRef={openAIRef}
            formBuilderRef={formBuilderRef}
            skeletonBuilderRef={skeletonBuilderRef}
            handleOpenDevTools={handleOpenDevTools}
            isEnabled
          />
        </>
      )}
    </>
  )
}

export default NgxDevtools
