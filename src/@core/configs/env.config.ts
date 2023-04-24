import { Builder } from '@core/helpers/builder.helper'
import { EnvModel } from '@core/models/env.model'

/**
 * Application environment variable builder from process
 */
const applicationEnvironmentVariable = () => {
  return Builder<EnvModel>()
    .backendUrl(process.env.REACT_APP_BACKEND_URL)
    .appVersion(process.env.REACT_APP_VERSION)
    .basePath(process.env.REACT_APP_BASE_PATH)
    .build()
}

export { applicationEnvironmentVariable }
