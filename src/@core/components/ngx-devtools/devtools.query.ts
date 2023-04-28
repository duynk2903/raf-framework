import { useMutation } from '@tanstack/react-query'
import { QuestionInDto } from '@core/components/ngx-devtools/chat-box/chatbox.type'
import { OpenAiService } from '@core/services/open-ai.service'

/**
 * Handle submit data questions
 */
function submitDataQuestion() {
  return useMutation({
    mutationFn: async (data: QuestionInDto) => {
      return OpenAiService.createCompletion({ question: data?.question })
    }
  })
}

export { submitDataQuestion }
