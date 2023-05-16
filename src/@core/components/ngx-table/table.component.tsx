import React from 'react'
import { Skeleton, Table } from 'antd'
import { NgxSkeletonTableProps, NgxTableProps } from '@core/components/ngx-table/table.type'

/**
 * Common Ngx table extend ant table
 * @param props
 * @param ref
 * @constructor
 */
const NgxTable = <T extends Record<string, any>>(props: NgxTableProps<T>, ref: React.ForwardedRef<HTMLDivElement>) => {
  return <Table<T> className="ngx-table" dataSource={props.data ?? []} ref={ref} {...props} />
}

/**
 * Ngx skeleton table
 * @param loading
 * @param active
 * @param rowCount
 * @param columns
 * @param children
 * @param className
 * @constructor
 */
function NgxSkeletonTable<T>({
  loading = false,
  active = false,
  rowCount = 5,
  columns,
  children,
  className
}: NgxSkeletonTableProps<T>): JSX.Element {
  return loading ? (
    <Table
      rowKey="key"
      className="ngx-skeleton-table"
      pagination={false}
      bordered
      dataSource={[...Array(rowCount)].map((_, index) => ({
        key: `key${index}`
      }))}
      columns={
        columns.map((column) => {
          return {
            ...column,
            render: function renderPlaceholder() {
              return <Skeleton key={column.key} title active={active} paragraph={false} className={className} />
            }
          }
        }) as any
      }
    />
  ) : (
    <>{children}</>
  )
}

export { NgxSkeletonTable }

export default React.forwardRef(NgxTable) as <T extends Record<string, any>>(
  props: NgxTableProps<T> & React.RefAttributes<HTMLDivElement>
) => JSX.Element
