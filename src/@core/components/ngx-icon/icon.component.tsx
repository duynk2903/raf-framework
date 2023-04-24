import { ImagesIconProps } from '@core/components/ngx-icon/icon.type'
import { FC } from 'react'

/**
 * Images icon component
 * @param name
 * @param className
 * @param onClick
 * @constructor
 */
const NgxIcon: FC<ImagesIconProps> = ({ name, className, onClick }) => {
  return <img src={`${process.env.PUBLIC_URL}${name}`} className={className} alt="" onClick={onClick} />
}

export default NgxIcon
