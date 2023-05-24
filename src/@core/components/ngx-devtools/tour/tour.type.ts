import { MutableRefObject } from 'react'
import { TFunction } from 'i18next'

export interface NgxDevToolsTournamentProps {
  isEnabled: boolean
  devToolsRef: MutableRefObject<any>
  formBuilderRef: MutableRefObject<any>
  openAIRef: MutableRefObject<any>
  skeletonBuilderRef: MutableRefObject<any>
  handleOpenDevTools: (isOpen: boolean) => void
  translate: TFunction
}
