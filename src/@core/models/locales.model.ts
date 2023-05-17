export interface LocalesModel {
  en: LocalesResourceModel
  kr: LocalesResourceModel
}

export interface LocalesResourceModel {
  auth: Record<any, any>
  common: Record<any, any>
  error: Record<any, any>
  menu: Record<any, any>
  settings: Record<any, any>
  dashboard?: Record<any, any>
}
