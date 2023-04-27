import { Configuration, OpenAIApi } from 'openai'
import { applicationEnvironmentVariable } from '@core/configs/env.config'

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
}
