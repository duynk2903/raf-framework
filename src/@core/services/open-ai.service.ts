import { Configuration, OpenAIApi } from 'openai'
import { applicationEnvironmentVariable } from '@core/configs/env.config'
import { CompletionInDto } from '@core/indtos/completion.indto'
import { OpenAIModelType } from '@core/enums/openai.enum'
import { Builder } from '@core/helpers/builder.helper'
import { AnswerQuestionModel } from '@core/models/answer.model'
import { String } from '@core/enums/common.enum'

/**
 * Open AI service
 */
export class OpenAiService {
  private static instance: OpenAIApi

  private constructor() {
    const { openAIKey } = applicationEnvironmentVariable()
    const configuration = new Configuration({
      apiKey: openAIKey
    })
    OpenAiService.instance = new OpenAIApi(configuration)
  }

  public static getInstance(): OpenAIApi {
    if (!OpenAiService.instance) {
      new OpenAiService()
    }
    return OpenAiService.instance
  }

  /**
   * Open AI service create completion
   * @param dto
   */
  public static async createCompletion(dto: CompletionInDto) {
    try {
      return await OpenAiService.getInstance()
        .createCompletion({
          model: OpenAIModelType.ENGINE_003,
          prompt: dto?.question,
          temperature: 0,
          max_tokens: 4000,
          top_p: 1.0,
          frequency_penalty: 0,
          presence_penalty: 0.6
        })
        .then((response) => response.data.choices[0])
        .then((data) =>
          Builder<AnswerQuestionModel>()
            .answer(data?.text || String.EMPTY_STRING)
            .build()
        )
    } catch (err) {
      return Builder<AnswerQuestionModel>().answer(String.EMPTY_STRING).build()
    }
  }
}
