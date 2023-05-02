import { FC } from 'react'
import { Spin } from 'antd'
import './loader.style.scss'
import { NgxLoaderProps } from '@core/components/ngx-loader/loader.type'

/**
 * Common loader spinner for lazy loading and loading in layout
 * @param isLoading
 * @param children
 * @constructor
 */
const NgxLoader: FC<NgxLoaderProps> = ({ isLoading = false, children }) => {
  return (
    <Spin spinning={isLoading} className="ngx-spinner" size="large">
      {children}
    </Spin>
  )
}

export default NgxLoader
