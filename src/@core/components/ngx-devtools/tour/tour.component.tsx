import React, { FC } from 'react'
import { NgxDevToolsTournamentProps } from '@core/components/ngx-devtools/tour/tour.type'
import { useDevToolsTournament } from '@core/components/ngx-devtools/tour/tour.hook'
import { Tour } from 'antd'

/**
 * Ngx DevTools tournament component
 * @param isEnabled
 * @param devToolsRef
 * @param openAIRef
 * @param skeletonBuilderRef
 * @param formBuilderRef
 * @param handleOpenDevTools
 * @param translate
 * @constructor
 */
const NgxDevToolsTournament: FC<NgxDevToolsTournamentProps> = ({
  isEnabled,
  devToolsRef,
  openAIRef,
  skeletonBuilderRef,
  formBuilderRef,
  handleOpenDevTools,
  translate
}) => {
  const { steps, isOpen, handleChangePositionTour, handleCloseTour } = useDevToolsTournament({
    devToolsRef,
    openAIRef,
    skeletonBuilderRef,
    formBuilderRef,
    isEnabled,
    handleOpenDevTools,
    translate
  })
  return (
    <Tour
      open={isOpen}
      onClose={handleCloseTour}
      steps={steps}
      onChange={handleChangePositionTour}
      type="primary"
      mask={false}
    />
  )
}

export default NgxDevToolsTournament
