import { useCallback, useEffect, useState } from 'react'
import { NgxDevToolsTournamentProps } from '@core/components/ngx-devtools/tour/tour.type'
import { TourProps } from 'antd'

/**
 * Use devtools tournament hook
 * @param devToolsRef
 * @param openAIRef
 * @param formBuilderRef
 * @param skeletonBuilderRef
 * @param handleOpenDevTools
 * @param translate
 */
const useDevToolsTournament = ({
  devToolsRef,
  openAIRef,
  formBuilderRef,
  skeletonBuilderRef,
  handleOpenDevTools,
  translate
}: NgxDevToolsTournamentProps) => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const steps: TourProps['steps'] = [
    {
      title: translate('devTools.tour.devtoolsTitle'),
      description: translate('devTools.tour.devtoolsDescription'),
      target: () => devToolsRef.current
    },
    {
      title: translate('devTools.tour.chatBotTitle'),
      description: translate('devTools.tour.chatBotDescription'),
      target: () => openAIRef.current
    },
    {
      title: translate('devTools.tour.skeletonBuilderTitle'),
      description: translate('devTools.tour.skeletonBuilderDescription'),
      target: () => skeletonBuilderRef.current
    },
    {
      title: translate('devTools.tour.formBuilderTitle'),
      description: translate('devTools.tour.formBuilderDescription'),
      target: () => formBuilderRef.current
    }
  ]

  /**
   * Handle change next and previous of the tournament
   */
  const handleChangePositionTour = useCallback((current: number) => {
    if (current >= 1) {
      handleOpenDevTools(true)
    } else {
      handleOpenDevTools(false)
    }
  }, [])

  /**
   * Handle close the tournament
   */
  const handleCloseTour = useCallback(() => {
    setOpen(false)
    handleOpenDevTools(false)
  }, [])

  /**
   * Initial effect wait 2s and open tournament
   */
  useEffect(() => {
    setTimeout(() => {
      setOpen(true)
    }, 2000)
  }, [])

  return {
    isOpen,
    steps,
    setOpen,
    handleChangePositionTour,
    handleCloseTour
  }
}

export { useDevToolsTournament }
