import React, { ReactNode } from 'react'

export interface NgxAnimationProps {
  type: AnimationType
  duration?: number
  offset?: number
  delay?: number
  children: ReactNode
}

export type AnimationType =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'fade-up-right'
  | 'fade-up-left'
  | 'fade-down-right'
  | 'fade-down-left'
  | 'flip-left'
  | 'flip-right'
  | 'flip-up'
  | 'flip-down'
  | 'zoom-in'
  | 'zoom-in-up'
  | 'zoom-in-down'
  | 'zoom-in-left'
  | 'zoom-in-right'
  | 'zoom-out'
  | 'zoom-out-up'
  | 'zoom-out-down'
  | 'zoom-out-left'

export type AnimationEasing = 'linear' | 'ease-in-sine' | 'ease-in-back' | 'ease-out-cubic'
