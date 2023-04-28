import { Form, message } from 'antd'
import { ChatBoxDataModel, ChatBoxUserType, QuestionInDto } from '@core/components/ngx-devtools/chat-box/chatbox.type'
import { useCallback, useEffect, useState } from 'react'
import _ from 'lodash'
import { submitDataQuestion } from '@core/components/ngx-devtools/devtools.query'

/**
 * Use chat box hook
 */
const useChatBox = () => {
  const [form] = Form.useForm<QuestionInDto>()
  const [messageApi, contextHolder] = message.useMessage()
  const { mutate: submitQuestion, isLoading: isWaitingAnswer } = submitDataQuestion()
  const [chatBoxData, setChatBoxData] = useState<ChatBoxDataModel[]>([])
  const [userChatData, setUserChatData] = useState<QuestionInDto>()

  /**
   * Put history chat to chat box
   */
  const putHistoryChat = useCallback(
    (history: ChatBoxDataModel) => {
      const currentHistory = [...chatBoxData]
      currentHistory.push(history)
      setChatBoxData(currentHistory)
    },
    [chatBoxData, submitQuestion]
  )

  const handleSubmitChatBox = useCallback(
    async (data: QuestionInDto) => {
      const { question } = data
      if (_.isEmpty(question)) {
        await messageApi.open({
          type: 'error',
          content: 'Please enter a question!'
        })
      } else {
        putHistoryChat({
          userType: ChatBoxUserType.USER,
          content: data?.question,
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
        })
        setUserChatData(data)
        form.resetFields()
      }
    },
    [chatBoxData, form]
  )

  /**
   * Effect check user chat question to AI and call AI to get the answer
   */
  useEffect(() => {
    if (userChatData) {
      submitQuestion(userChatData, {
        onSuccess: (data) => {
          putHistoryChat({
            userType: ChatBoxUserType.AI,
            content: data.answer,
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel'
          })
          setUserChatData(undefined)
          const chatBox = document.getElementById('chat')
          if (chatBox) {
            chatBox.scrollTop = chatBox.scrollHeight
          }
        }
      })
    }
  }, [userChatData])

  return {
    form,
    handleSubmitChatBox,
    contextHolder,
    chatBoxData,
    isWaitingAnswer
  }
}

export { useChatBox }
