import { Form } from 'antd'
import { QuestionInDto } from '@core/components/ngx-devtools/chat-box/chatbox.type'
import { useCallback } from 'react'

/**
 * Use chat box hook
 */
const useChatBox = () => {
  const [form] = Form.useForm<QuestionInDto>()

  const handleSubmitChatBox = useCallback((data: QuestionInDto) => {
    console.log(data)
  }, [])

  return {
    form,
    handleSubmitChatBox
  }
}

export { useChatBox }
