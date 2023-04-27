import React from 'react'
import { Table } from 'antd'
import { NgxTableProps } from '@core/components/ngx-table/table.type'

/**
 * Common Ngx table extend ant table
 * @param props
 * @param ref
 * @constructor
 */
const NgxTable = <T extends Record<string, any>>(props: NgxTableProps<T>, ref: React.ForwardedRef<HTMLDivElement>) => {
  return <Table<T> className="ngx-table" dataSource={props.data ?? []} ref={ref} {...props} />
}

export default React.forwardRef(NgxTable) as <T extends Record<string, any>>(
  props: NgxTableProps<T> & React.RefAttributes<HTMLDivElement>
) => JSX.Element
