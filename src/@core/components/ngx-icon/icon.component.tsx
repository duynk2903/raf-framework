import { ImagesIconProps } from '@core/components/ngx-icon/icon.type'
import { FC } from 'react'
import { applicationEnvironmentVariable } from '@core/configs/env.config'

/**
 * Images icon component
 * @param name
 * @param className
 * @param onClick
 * @constructor
 */
const NgxIcon: FC<ImagesIconProps> = ({ name, className, onClick }) => {
  const { publicUrl } = applicationEnvironmentVariable()
  return <img src={`${publicUrl}${name}`} className={className} alt="" onClick={onClick} loading="lazy" />
}

export default NgxIcon
