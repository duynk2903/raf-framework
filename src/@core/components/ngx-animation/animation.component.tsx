import { FC } from 'react'
import { NgxAnimationProps } from '@core/components/ngx-animation/animation.type'

/**
 * Common ngx animation scroll animated
 * @param type
 * @param delay
 * @param offset
 * @param duration
 * @param className
 * @param children
 * @constructor
 */
const NgxAnimation: FC<NgxAnimationProps> = ({ type, delay = 300, offset, duration, className, children }) => {
  return (
    <div
      data-aos={type}
      data-aos-delay={delay}
      className={`ngx-animation w-full ${className}`}
      data-aos-offset={offset ?? null}
      data-aos-duration={duration ?? null}>
      {children}
    </div>
  )
}

export default NgxAnimation
