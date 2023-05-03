import { Builder } from '@core/helpers/builder.helper'
import { EnvModel } from '@core/models/env.model'
import { ActiveEnvironmentProfile } from '@core/enums/env.enum'

/**
 * Application environment variable builder from process
 */
const applicationEnvironmentVariable = (): EnvModel => {
  return Builder<EnvModel>()
    .backendUrl(process.env.REACT_APP_BACKEND_URL)
    .appVersion(process.env.REACT_APP_VERSION)
    .basePath(process.env.REACT_APP_BASE_PATH)
    .openAIKey(process.env.REACT_APP_OPEN_AI_KEY)
    .isDevelopment(process.env.NODE_ENV === ActiveEnvironmentProfile.DEVELOPMENT)
    .publicUrl(process.env.PUBLIC_URL)
    .build()
}

export { applicationEnvironmentVariable }
