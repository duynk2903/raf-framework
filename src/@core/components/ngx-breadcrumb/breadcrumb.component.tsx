import React, { FC } from 'react'
import { Breadcrumb, Typography } from 'antd'
import { useBreadCrumb } from '@core/components/ngx-breadcrumb/breadcrumb.hook'

/**
 * Common ngx breadcrumb component
 * @constructor
 */
const NgxBreadCrumb: FC = () => {
  const { activeItem, translate, getListCrumbItems } = useBreadCrumb()
  return (
    <>
      <Breadcrumb className="mb-5" items={getListCrumbItems()} />
      <Typography.Title level={4}>
        {translate(activeItem && activeItem?.handle && activeItem?.handle?.title)}
      </Typography.Title>
    </>
  )
}

export default NgxBreadCrumb
