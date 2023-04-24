import { ApiMethod } from '@core/enums/api.enum'

export interface ApiModel {
  path: string
  method?: ApiMethod
}

export interface ApiConfig {
  [key: string]: ApiModel
}
