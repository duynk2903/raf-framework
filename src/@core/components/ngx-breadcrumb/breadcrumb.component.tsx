import React, { FC } from 'react'
import { Breadcrumb, Typography } from 'antd'
import { useBreadCrumb } from '@core/components/ngx-breadcrumb/breadcrumb.hook'
import { Link } from 'react-router-dom'

/**
 * Common ngx breadcrumb component
 * @constructor
 */
const NgxBreadCrumb: FC = () => {
  const { activeItem, translate, getListCrumbItems } = useBreadCrumb()
  const listItems =
    getListCrumbItems &&
    getListCrumbItems().map(({ path, title }: any) => {
      return {
        key: path,
        title: activeItem?.pathname !== path ? <Link to={path}>{title}</Link> : title
      }
    })
  return (
    <>
      <Breadcrumb className="mb-5" items={listItems} />
      <Typography.Title level={4}>
        {translate(activeItem && activeItem?.handle && activeItem?.handle?.title)}
      </Typography.Title>
    </>
  )
}

export default NgxBreadCrumb
